import React from "react";

import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { ROUTES } from "routes";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        <div className="header">
          <div className="header__left">
            <img
              src={require("client/assets/images/new-logo-devinc.png")}
              alt=""
              onClick={() => navigate(ROUTES.CLIENT.HOME)}
            />
            <h3>DE VINC</h3>
          </div>
        </div>
        <div className="content">
          <img
            className="content__icon-not-found"
            src={require("client/assets/images/404-error.jpg.webp")}
            alt=""
          />
          <h1>Không tìm thấy nội dung 😓</h1>
          <div className="content__text">
            URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.
          </div>
          <div className="content__text">
            Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay vì
            dùng URL đã lưu.
          </div>
          <Link to={ROUTES.CLIENT.HOME}>
            <button className="--btn-default --btn-default--custome">
              Truy cập trang chủ
            </button>
          </Link>
          <div className="content__footer">
            <i className="fa-regular fa-copyright"></i>&nbsp; 2016 - {new Date().getFullYear()} DE VINC. Nền
            tảng mua sắm hàng đầu Việt Nam
          </div>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};

export default NotFoundPage;
