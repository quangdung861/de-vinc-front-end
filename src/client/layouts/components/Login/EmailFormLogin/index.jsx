import React, { useState } from "react";

import * as S from "./styles";

import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "routes";

const EmailFormLogin = ({ setLoginWay, setIsShow }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: {
            value: undefined,
        },
        password: {
            value: undefined,
        },
        error: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: {
                ...prevData[name],
                value: value,
            },
            error: null,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
        <S.Wrapper>
            <div className="btn-back">
                <i
                    className="fa-solid fa-chevron-left"
                    style={{
                        fontSize: "20px",
                        cursor: "pointer",
                        padding: "16px 24px 16px 0px",
                    }}
                    onClick={() => setLoginWay("")}
                ></i>
            </div>
            <div className="register-container">
                <div className="login-header">
                    <img
                        src={require('client/assets/images/new-logo-devinc.png')}
                        alt=""
                        onClick={() => setIsShow(false)}
                    />
                    <h1>Đăng nhập vào De Vinc</h1>
                </div>
                <form
                    name="register-form-email"
                    id="register-form-email"
                    onSubmit={handleSubmit}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontWeight: "500",
                            margin: "16px 8px 8px 8px",
                        }}
                    >
                        <span>Email</span>
                    </div>

                    <div className="box-email">
                        <input
                            type="text"
                            placeholder="Địa chỉ email"
                            name="email"
                            className="email"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="box-password">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            name="password"
                            className="password"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="error-fullname"></div>
                    <div style={{ color: "#f33a58" }}>{formData.error}</div>
                    <div
                        style={{
                            margin: "8px 0px 20px 8px",
                            fontSize: "12px",
                            color: "#6b6f74",
                        }}
                    >
                        Gợi ý: Mật khẩu cần có ít nhất 8 ký tự
                    </div>

                    <div className="box-confirm">
                        <input
                            type="text"
                            className="confirm"
                            placeholder="Nhập mã xác minh"
                            disabled
                            autoComplete="off"
                        />
                        <div className="btn-sendCode">Gửi mã</div>
                    </div>

                    {/*  */}
                    <button
                        className={
                            !formData.password.value || !formData.email.value
                                ? "btn-submit"
                                : "btn-submit btn-submit--active"
                        }
                        type="submit"
                    >
                        Đăng nhập
                    </button>
                </form>
                <div style={{ color: "#35414c" }}>
                    Bạn chưa có tài khoản?{" "}
                    <Link
                        style={{ color: "#f05123", fontWeight: 500 }}
                        to={ROUTES.REGISTER}
                    >
                        Đăng ký
                    </Link>
                </div>
            </div>
        </S.Wrapper>
    );
};

export default EmailFormLogin;
