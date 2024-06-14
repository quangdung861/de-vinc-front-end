import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Modal } from '@common';
import Login from '../Login';

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <Wrapper>
      <div className="container">
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
          <div className="header-left">
            <div className="header-logo">
              <span>DE VINC</span>
            </div>
          </div>
          <div className="header-center">
            <div className="header-menu">
              <div className="header-menu-dropdown">
                <div className="dropdown-title">SẢN PHẨM</div>
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

          </div>
          <div className="header-right">
            <div className="box-search">
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
              <input
                className="input-search"
                placeholder="Tìm kiếm sản phẩm, bài viết , video, ..."

              />
            </div>
            <div className="header-action">
              <div className="btn-profile">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="btn-cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isShow={isShowModal} setIsShow={setIsShowModal} >
        <Login setIsShow={setIsShowModal}/>
      </Modal>
    </Wrapper>
  )
}

export default Header