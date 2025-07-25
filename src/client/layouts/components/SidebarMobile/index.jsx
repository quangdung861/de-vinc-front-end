import React, { useEffect, useState, useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AppContext } from "Context/AppProvider";

import * as S from "./styles";
// import { ROUTES } from "constants/routes";
import { useSelector } from "react-redux";
import { ROUTER_CLIENT } from "client/routes";
// import { auth, db } from "firebaseConfig";

const SidebarMobile = ({ isShowSidebarMobile, setIsShowSidebarMobile }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const { userInfo } = useSelector((state) => state.userReducer);

  // const { userInfo } = useContext(AppContext);

  const [showDropdown, setShowDropdown] = useState();
  const [showDropdown2nd, setShowDropdown2nd] = useState();

  const firstPathName = "/" + pathname.split("/")[1];

  // useEffect(() => {
  //   setIsShowSidebarMobile(null);
  // }, [firstPathName]);

  // const handleLogoutAuthFirebase = async () => {
  //   await auth.signOut();
  //   window.location.reload();
  // };

  useEffect(() => {
    document.body.style.overflow = isShowSidebarMobile ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowSidebarMobile]);

  const SidebarLink = ({ to, children }) => (
    <Link to={to} onClick={() => setIsShowSidebarMobile(false)}>
      {children}
    </Link>
  );

  return (
    isShowSidebarMobile !== null && (
      <S.Wrapper>
        <S.Container>
          <div
            className={
              isShowSidebarMobile
                ? "modal-overlay-sidebar modal-overlay-sidebar-open"
                : isShowSidebarMobile !== null
                && "modal-overlay-sidebar modal-overlay-sidebar-close"
            }
            onClick={() => setIsShowSidebarMobile(false)}
          ></div>

          <div
            className={
              isShowSidebarMobile
                ? "sidebar-mobile sidebar-mobile--open"
                : isShowSidebarMobile !== null
                && "sidebar-mobile sidebar-mobile--close"
            }
          >
            <ul className="sidebar-mobile-list sidebar-mobile-list--header">
              <li
                className={
                  firstPathName !== "/login"
                    ? "sidebar-mobile-item"
                    : "sidebar-mobile-item sidebar-mobile-item--active"
                }
              >
                {1 ? (
                  <div
                    className="sidebar-mobile-item__content"
                  // onClick={() => navigate(ROUTES.LOGIN)}
                  >
                    <i className="fa-solid fa-right-to-bracket content-icon"></i>
                    <div className="content-text">Đăng nhập</div>
                  </div>
                ) : (
                  <div
                    className="sidebar-mobile-item__content"
                  // onClick={() => navigate(ROUTES.USER.ACCOUNT.PROFILE)}
                  >
                    <img
                      // src={userInfo?.data.avatar}
                      alt=""
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        marginRight: "12px",
                      }}
                    />
                    {/* <span>{userInfo?.data?.fullName}</span> */}
                  </div>
                )}
              </li>
            </ul>
            <ul className="sidebar-mobile-list">
              <li
                className={
                  // firstPathName !== "/" + ROUTES.USER.HOME.split("/")[1]
                  //   ? "sidebar-mobile-item"
                  //   : 
                  "sidebar-mobile-item sidebar-mobile-item--active"
                }
              // onClick={() => navigate(ROUTES.USER.HOME)}
              >
                <SidebarLink to={ROUTER_CLIENT.HOME}>
                  <div className="sidebar-mobile-item__content">
                    <i className="fa-solid fa-house content-icon"></i>
                    <div className="content-text">
                      Trang chủ
                    </div>
                  </div>
                </SidebarLink>
              </li>
              <li
                className={
                  // firstPathName !== "/" + ROUTES.USER.LEARNING_PATHS.split("/")[1]
                  //   ? "sidebar-mobile-item"
                  //   : 
                  "sidebar-mobile-item sidebar-mobile-item--active"
                }
              // onClick={() => navigate(ROUTES.USER.LEARNING_PATHS)}
              >
                <SidebarLink to={ROUTER_CLIENT.PRODUCT_LIST}>
                  <div className="sidebar-mobile-item__content">
                    <i className="fa-solid fa-road content-icon"></i>
                    <div className="content-text" >
                      Sản phẩm
                    </div>
                  </div>
                </SidebarLink>
              </li>
              <li
                className={
                  // firstPathName !== "/" + ROUTES.USER.COURSES.split("/")[1]
                  //   ? "sidebar-mobile-item"
                  //   : 
                  "sidebar-mobile-item sidebar-mobile-item--active"
                }
              // onClick={() => navigate(ROUTES.USER.COURSES)}
              >
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-lightbulb content-icon"></i>
                  <div className="content-text">Chính sách</div>
                </div>
              </li>
              <li
                className={
                  // firstPathName !== "/" + ROUTES.USER.BLOG.split("/")[1]
                  //   ? "sidebar-mobile-item"
                  //   :
                  "sidebar-mobile-item sidebar-mobile-item--active"
                }
              // onClick={() => navigate(ROUTES.USER.BLOG)}
              >
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-book content-icon"></i>
                  <div className="content-text">Blog</div>
                </div>
              </li>
            </ul>
            <ul className="sidebar-mobile-list">
              <li className="sidebar-mobile-item">
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-circle-info content-icon"></i>
                  <div className="content-text">Giới thiệu</div>
                </div>
              </li>
              <li className="sidebar-mobile-item">
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-user-group content-icon"></i>
                  <div className="content-text">Cơ hội việc làm</div>
                </div>
              </li>
              <li
                className="sidebar-mobile-item"
                onClick={() => {
                  showDropdown === "setting"
                    ? setShowDropdown("")
                    : setShowDropdown("setting");
                }}
              >
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-gear content-icon"></i>
                  <div className="content-text content-text--custome">
                    <span>Cài đặt</span>
                    {showDropdown ? (
                      <i className="fa-solid fa-chevron-right fa-rotate-90"></i>
                    ) : (
                      <i className="fa-solid fa-chevron-right"></i>
                    )}
                  </div>
                </div>
              </li>

              {/* Dropdown 1 */}
              <ul
                className={
                  showDropdown !== "setting"
                    ? "sidebar-mobile-list-2 "
                    : "sidebar-mobile-list-2 sidebar-mobile-list-2--active"
                }
              >
                <li className="sidebar-mobile-item-2">
                  <div className="sidebar-mobile-item__content-2">
                    <div className="content-text-2">Cài đặt tài khoản</div>
                  </div>
                </li>
                <li className="sidebar-mobile-item-2">
                  <div className="sidebar-mobile-item__content-2">
                    <div className="content-text-2">Bảo mật và đăng nhập</div>
                  </div>
                </li>
                <li className="sidebar-mobile-item-2">
                  <div className="sidebar-mobile-item__content-2">
                    <div className="content-text-2">Thông báo</div>
                  </div>
                </li>
                <li
                  className="sidebar-mobile-item-2"
                  onClick={() => {
                    showDropdown2nd === "Quản lý tiếp thị liên kết"
                      ? setShowDropdown2nd("")
                      : setShowDropdown2nd("Quản lý tiếp thị liên kết");
                  }}
                >
                  <div className="sidebar-mobile-item__content-2">
                    <div className="content-text-2">
                      <span>Quản lý tiếp thị liên kết</span>
                      {showDropdown2nd ? (
                        <i className="fa-solid fa-chevron-right fa-rotate-90"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-right"></i>
                      )}
                    </div>
                  </div>
                </li>
                {/* Dropdown 3 */}
                <ul
                  className={
                    showDropdown2nd !== "Quản lý tiếp thị liên kết"
                      ? "sidebar-mobile-list-3 "
                      : "sidebar-mobile-list-3 sidebar-mobile-list-3--active"
                  }
                >
                  <li className="sidebar-mobile-item-3">
                    <div className="sidebar-mobile-item__content-3">
                      <div className="content-text-3">
                        <i className="fa-regular fa-circle"></i>
                        <span>Thu thập dự kiến</span>
                      </div>
                    </div>
                  </li>
                  <li className="sidebar-mobile-item-3">
                    <div className="sidebar-mobile-item__content-3">
                      <div className="content-text-3">
                        <i className="fa-regular fa-circle"></i>
                        <span>Danh sách đơn hàng</span>
                      </div>
                    </div>
                  </li>
                  <li className="sidebar-mobile-item-3">
                    <div className="sidebar-mobile-item__content-3">
                      <div className="content-text-3">
                        <i className="fa-regular fa-circle"></i>
                        <span>Thông tin thanh toán</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </ul>
              {1 && (
                <li
                  className="sidebar-mobile-item"
                // onClick={() => handleLogoutAuthFirebase()}
                >
                  <div className="sidebar-mobile-item__content">
                    <i className="fa-sharp fa-solid fa-right-from-bracket content-icon"></i>
                    <div className="content-text">Đăng xuất</div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </S.Container>
      </S.Wrapper>)
  );
};

export default SidebarMobile;
