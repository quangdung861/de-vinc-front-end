import React, { useState, useContext } from 'react'
import { Wraper } from './styles'
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'routes';
import clsx from 'clsx';

const Sidebar = ({ isShowSidebar, setIsShowSidebar, isSmallScreen }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [opening, setOpening] = useState("");
  const newPathname = pathname.split("/").slice(0, 3).join("/");

  const actionList = [
    {
      name: "Sản phẩm",
      icon: <i className="fa-solid fa-box"></i>,
      path: ROUTES.ADMIN.PRODUCT_LIST,
      data: [
        {
          name: "Danh sách sản phẩm",
          path: ROUTES.ADMIN.PRODUCT_LIST,
        }
      ]
    },
    {
      name: "Trang khách hàng",
      icon: <i className="fa-solid fa-arrow-right-arrow-left"></i>,
      path: ROUTES.CLIENT.HOME,
      data: []
    },
  ];

  const handleActionSidebar = (action) => {
    if (isShowSidebar) {
      opening === action.path ? setOpening('') : setOpening(action.path);
      action.data.length === 0 && navigate(action.path)
    } else {
      opening === action.path ? setOpening('') : setOpening(action.path);
      action.data.length === 0 && navigate(action.path)
    }
  }

  const RenderMenuAction = actionList.map((action, index) => {
    return (
      <div className={clsx("menu-action")} key={index}>
        <div className={clsx("menu-name", action.data.some(item => item.path === newPathname) || action.path === newPathname ? "active" : "disabled")} onClick={() => handleActionSidebar(action)} >
          <div className="menu-name-left">
            {action.icon}
            <span>
              {action.name}
            </span>
          </div>
          {
            action.data.length > 0 && (<div className="menu-name-right">
              {
                opening === action.path ? <i className="fa-solid fa-chevron-down" style={{ marginLeft: 8 }}></i> : <i className="fa-solid fa-chevron-right" style={{ marginLeft: 8 }}></i>
              }
            </div>)
          }
        </div>
        {
          opening === action.path &&
          action.data.map((item, index) => {
            return (
              <div key={index} className={clsx("menu-item", item.path === newPathname && "active")} onClick={() => {
                navigate(item.path)
              }}>
                {item.name}
              </div>
            )
          })
        }
        {
          !isShowSidebar && action.data[0] && <div className="dropdown-menu">
            <div className="dropdown-list">
              <div className="dropdown-header">
                <div className='dropdown-header-name'>{action.name}</div>
                <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsShowSidebar(!isShowSidebar)}></i>
              </div>
              {
                action.data.map((item, index) => {
                  return (
                    <div key={index} className={clsx("dropdown-item", item.path === newPathname && "active")} onClick={() => {
                      navigate(item.path)
                    }}>
                      {item.name}
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
      </div >
    )
  })

  return (
    <Wraper $isshowsidebar={isShowSidebar}>
      <div className={clsx("container")}>
        <div className="header">
          {
            isShowSidebar && <div className="header-logo" onClick={() => navigate(ROUTES.ADMIN.DASHBOARD)}>DE VINC</div>
          }
          <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsShowSidebar(!isShowSidebar)}></i>
        </div>
        <div className="menu-list">
          {RenderMenuAction}
        </div>
      </div>
    </Wraper>
  )
}

export default Sidebar