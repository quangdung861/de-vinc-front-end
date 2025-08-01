import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import EmailFormLogin from "./EmailFormLogin";

const Register = ({ setIsShow, setIsShowLogin }) => {
  const [loginWay, setLoginWay] = useState("");

  const renderLoginWay = () => {
    switch (loginWay) {
      case "email":
        return (
          <EmailFormLogin
            setLoginWay={setLoginWay}
            loginWay={loginWay}
            setIsShow={setIsShow}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        {loginWay ? (
          <>{renderLoginWay()}</>
        ) : (
          <>
            <div className="login-header">
              <img
                src={require("client/assets/images/new-logo-devinc.png")}
                alt=""
                onClick={() => setIsShow(false)}
              />
              <h1>Đăng Ký tài khoản De Vinc</h1>
            </div>
            <div className="login-content">
              <ul className="list">
                <li className="item">
                  <button
                    className="--btn-default btn-custome"
                    onClick={() => setLoginWay("email")}
                  >
                    <img
                      src={require("client/assets/images/Sample_User_Icon.png")}
                      alt=""
                    />
                    <span>Sử dụng email/ số điện thoại</span>
                  </button>
                </li>
                <li className="item">
                  <button
                    className="--btn-default btn-custome disable"
                    // onClick={() => handleGoogleSignIn()}
                  >
                    <img
                      src={require("client/assets/images/Google_Icons-09-512.webp")}
                      alt=""
                    />
                    <span>Tiếp tục với Google</span>
                  </button>
                </li>
                <li className="item">
                  <button
                    className="--btn-default btn-custome disable"
                    // onClick={() => handleGoogleSignIn()}
                  >
                    <img
                      src={require("client/assets/images/Facebook_Logo_2023.png")}
                      alt=""
                    />
                    <span>Tiếp tục với Facebook</span>
                  </button>
                </li>
                <li className="item">
                  <button
                    className="--btn-default btn-custome disable"
                    // onClick={() => handleGithubSignIn()}
                  >
                    <img
                      src={require("client/assets/images/25231.png")}
                      alt=""
                    />
                    <span>Tiếp tục với Github</span>
                  </button>
                </li>
              </ul>
              <div style={{ color: "#35414c" }}>
                Bạn chưa có tài khoản?{" "}
                <span
                  style={{
                    color: "#f05123",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsShow(false);
                    setIsShowLogin(true);
                  }}
                >
                  Đăng nhập
                </span>
              </div>
              <div style={{ color: "#f05123", fontWeight: 500, marginTop: 12, cursor: "pointer" }}>
                Quên mật khẩu
              </div>
            </div>
          </>
        )}
        <div className="login-footer">
          <p style={{ color: "#4f5a64", fontSize: "12px" }}>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
            <br />
            <Link style={{ textDecoration: "underline" }}>
              Điều khoản sử dụng
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
