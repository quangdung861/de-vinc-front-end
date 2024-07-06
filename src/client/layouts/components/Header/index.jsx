import React, { useEffect, useState } from 'react'
import { Modal } from '@common';
import Login from '../Login';
import { useNavigate } from 'react-router-dom';
import { ROUTER_CLIENT } from 'client/routes';
import '../Header/styles.scss'
import clsx from 'clsx';

const Header = () => {
  const navigate = useNavigate()
  const [isShowModal, setIsShowModal] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [lastLoggedPosition, setLastLoggedPosition] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const { searchList } = useSelector((state) => state.searchReducer);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      
      if (Math.abs(currentScrollTop - lastLoggedPosition) >= 100) {
        if (currentScrollTop > lastScrollTop) {
          if (currentScrollTop >= 200) {
            setIsShow(false)
          }
        } else {
          setIsShow(true)
        }
        setLastLoggedPosition(currentScrollTop);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, lastLoggedPosition]);

  return (
    <div className={clsx("container", !isShow && "disabled")}>
      <div className="container-top">
        <div className="header-left"></div>
        <div className="header-center">
          <div className="promotion-description">
            Miễn phí giao hàng với đơn hàng từ 499K
          </div>
        </div>
        <div className="header-right">
          <div className="btn btn-login" onClick={() => setIsShowModal(true)}>Đăng nhập</div>
          <div className="btn btn-register" onClick={() => setIsShowModal(true)}>Đăng ký</div>
        </div>
      </div>
      <div className="container-bottom">
        <div className="header-left" onClick={() => navigate(ROUTER_CLIENT.HOME)}>
          <div className="header-logo">
            <span>DE VINC</span>
          </div>
        </div>
        <div className="header-center">
          <div className="header-menu">
            <div className="header-menu-dropdown">
              <div className="dropdown-title" onClick={() => navigate(ROUTER_CLIENT.PRODUCT_LIST)}>SẢN PHẨM</div>
              <div className="dropdown-list">
                <div className="dropdown-item">
                  Áo thun
                </div>
                <div className="dropdown-item">
                  Áo sơmi
                </div>
                <div className="dropdown-item">
                  Áo khoác
                </div>
                <div className="dropdown-item">
                  Quần tây
                </div>
                <div className="dropdown-item">
                  Quần jean
                </div>
                <div className="dropdown-item">
                  Quần short
                </div>
              </div>
            </div>
          </div>
          <div className="btn-menu-mobile">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <div className="header-right">
        <div className="box-search">
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
              <input
                className="input-search"
                placeholder="Tìm kiếm khóa học, bài viết , video, ..."
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
                  ) : !!searchList.data.courses[0] === false &&
                    !!searchList.data.posts[0] === false &&
                    !!searchList.data.videos[0] === false ? (
                    <span>Không có kết quả cho '{keyword}'</span>
                  ) : (
                    <span>Kết quả cho '{keyword}'</span>
                  )}
                </div>
                <div className="center">
                  <div className="content-list">
                  
                  </div>
                </div>
              </div>
            </div>
          <div className="header-action">
            <div className="btn-search">
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
      <Modal isShow={isShowModal} setIsShow={setIsShowModal} >
        <Login setIsShow={setIsShowModal} />
      </Modal>
    </div>
  )

}

export default Header