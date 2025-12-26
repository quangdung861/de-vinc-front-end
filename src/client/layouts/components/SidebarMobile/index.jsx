import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./styles";
import { ROUTER_CLIENT } from "client/routes";

const SidebarMobile = ({ isShowSidebarMobile, setIsShowSidebarMobile }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const firstPathName = "/" + pathname.split("/")[1];

  useEffect(() => {
    if (isShowSidebarMobile) {
      document.documentElement.style.overflow = "hidden"; // html
      document.body.style.overflow = "hidden"; // body
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isShowSidebarMobile]);

  const handleNavigate = (to) => {
    setIsShowSidebarMobile(false);
    navigate(to);
  };

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
            <ul className="sidebar-mobile-list second">
              <li
                className={
                  firstPathName === "/" + ROUTER_CLIENT.HOME.split("/")[1]
                    ? "sidebar-mobile-item sidebar-mobile-item--active"
                    :
                    "sidebar-mobile-item "
                }
                // onClick={() => navigate(ROUTES.USER.HOME)}
                onClick={() => handleNavigate(ROUTER_CLIENT.HOME)}
              >

                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-house content-icon"></i>
                  <div className="content-text">
                    Trang chủ
                  </div>
                </div>

              </li>
              <li
                className={
                  firstPathName === "/" + ROUTER_CLIENT.PRODUCT_LIST.split("/")[1]
                    ? "sidebar-mobile-item sidebar-mobile-item--active"
                    :
                    "sidebar-mobile-item "
                }
                onClick={() => handleNavigate(ROUTER_CLIENT.PRODUCT_LIST)}
              >

                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-road content-icon"></i>
                  <div className="content-text" >
                    Sản phẩm
                  </div>
                </div>

              </li>
              <li
                className={
                  firstPathName === "/" + "/policy".split("/")[1]
                    ? "sidebar-mobile-item sidebar-mobile-item--active"
                    :
                    "sidebar-mobile-item "
                }
                onClick={() => handleNavigate(ROUTER_CLIENT.POLICY_PAGE)}
              >
                <div className="sidebar-mobile-item__content">
                  <i className="fa-solid fa-lightbulb content-icon"></i>
                  <div className="content-text">Chính sách</div>
                </div>
              </li>

            </ul>
          </div>
        </S.Container>
      </S.Wrapper>)
  );
};

export default SidebarMobile;
