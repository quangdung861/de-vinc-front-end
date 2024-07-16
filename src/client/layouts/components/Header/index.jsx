import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "@common";
import Login from "../Login";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_CLIENT } from "client/routes";
import "../Header/styles.scss";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getSearchListAction } from "client/redux/actions";
import { getImage } from "client/utils";
import { ClientContext } from "client/contexts/ClientProvider";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isBoxSearch } = useContext(ClientContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastLoggedPosition, setLastLoggedPosition] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const [isOverlayModal, setIsOverlayModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { searchList } = useSelector((state) => state.client.productReducer);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (Math.abs(currentScrollTop - lastLoggedPosition) >= 100) {
        if (currentScrollTop > lastScrollTop) {
          if (currentScrollTop >= 200) {
            setIsShow(false);
            setKeyword("");
            inputRef?.current?.blur();
          }
        } else {
          setIsShow(true);
        }
        setLastLoggedPosition(currentScrollTop);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop, lastLoggedPosition]);

  useEffect(() => {
    if (keyword.length >= 1) {
      dispatch(
        getSearchListAction({
          params: {
            q: keyword,
            items_per_page: 6,
          },
        })
      );
    } else {
      dispatch(
        getSearchListAction({
          params: {
            q: "",
          },
        })
      );
    }
  }, [keyword]);

  const dropdownContainer = useRef();
  const boxSearchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownContainer.current &&
        !dropdownContainer.current.contains(event.target) &&
        boxSearchRef.current &&
        !boxSearchRef.current.contains(event.target)
      ) {
        setKeyword("");
        setIsOverlayModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFocusSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleCloseSearch = () => {
    inputRef.current.value = "";
    setKeyword("");
  };

  const renderProducts = () => {
    if (searchList.data[0]) {
      const product = searchList.data?.map((item, index) => {
        return (
          <div className="result-item" key={index}>
            <img src={getImage(item?.images)} alt="" />
            <span>{item.name}</span>
          </div>
        );
      });
      return (
        <div className="content-item">
          <div className="result-header">
            <h4 className="result-header__left">SẢN PHẨM</h4>
            <Link
              className="result-header__right"
              state={{ keyword }}
              to={ROUTER_CLIENT.SEARCH_PAGE}
            >
              <div
                onClick={() => {
                  setKeyword("");
                  inputRef.current.value = "";
                  setIsOverlayModal(false);
                }}
              >
                Xem thêm
              </div>
            </Link>
          </div>
          <div className="result-list">{product}</div>
        </div>
      );
    }
  };

  return (
    <>
      <div className={clsx("container", !isShow && "disabled")}>
        <div className="container-top">
          <div className="header-left"></div>
          <div className="header-center">
            <div className="promotion-description">
              Miễn phí giao hàng với đơn hàng từ 499K
            </div>
          </div>
          <div className="header-right">
          <div
              className="--btn-default btn-register"
              onClick={() => setIsShowModal(true)}
            >
              Đăng ký
            </div>
            <div className="--btn-default btn-login" onClick={() => setIsShowModal(true)}>
              Đăng nhập
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <div
            className="header-left"
            onClick={() => navigate(ROUTER_CLIENT.HOME)}
          >
            <div className="header-logo">
              <span>DE VINC</span>
            </div>
          </div>
          <div className="header-center">
            <div className="header-menu">
              <div className="header-menu-dropdown">
                <div
                  className="dropdown-title"
                  onClick={() => navigate(ROUTER_CLIENT.PRODUCT_LIST)}
                >
                  SẢN PHẨM
                </div>
                <div className="dropdown-list">
                  <div className="dropdown-item">Áo thun</div>
                  <div className="dropdown-item">Áo sơmi</div>
                  <div className="dropdown-item">Áo khoác</div>
                  <div className="dropdown-item">Quần tây</div>
                  <div className="dropdown-item">Quần jean</div>
                  <div className="dropdown-item">Quần short</div>
                </div>
              </div>
            </div>
            <div className="btn-menu-mobile">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="header-right">
            {isBoxSearch && (
              <div
                className="box-search"
                onClick={() => inputRef.current.focus()}
                ref={boxSearchRef}
              >
                <i className="fa-solid fa-magnifying-glass icon-search"></i>
                <input
                  className="input-search"
                  placeholder="Tìm kiếm sản phẩm, bài viết, video, ..."
                  onChange={(e) => setKeyword(e.target.value)}
                  onFocus={(e) => handleFocusSearch(e)}
                  ref={inputRef}
                />
                {inputRef.current?.value && (
                  <i
                    className="fa-solid fa-xmark icon-close"
                    onClick={() => handleCloseSearch()}
                  ></i>
                )}

                <div
                  ref={dropdownContainer}
                  className={
                    !keyword
                      ? "container-search-result"
                      : "container-search-result  container-search-result--active"
                  }
                >
                  <div className="top">
                    {!searchList.loading ? (
                      <i
                        className="fa-solid fa-magnifying-glass icon-search"
                        style={{ fontSize: "14px" }}
                      ></i>
                    ) : (
                      <i className="fa-solid fa-spinner icon-spin--active"></i>
                    )}

                    {searchList.loading ? (
                      <span>Tìm '{keyword}'</span>
                    ) : !!searchList?.data[0] === false ? (
                      <span>Không có kết quả cho '{keyword}'</span>
                    ) : (
                      <span>Kết quả cho '{keyword}'</span>
                    )}
                  </div>
                  <div className="center">
                    <div className="content-list">{renderProducts()}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="header-action">
              <div
                className="btn-search"
                onClick={() => navigate(ROUTER_CLIENT.SEARCH_PAGE)}
              >
                <i className="fa-solid fa-magnifying-glass icon-search"></i>
              </div>
              <div className="btn-profile">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="btn-cart">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isShow={isShowModal}
        setIsShow={setIsShowModal}
        className='modal-login'
      >
        <Login setIsShow={setIsShowModal} />
      </Modal>
    </>
  );
};

export default Header;
