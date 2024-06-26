import React, { useRef, useEffect } from "react";
import * as S from "./styles";

const Confirm = ({ isShow, setIsShow, modalName, action, children, footer }) => {
    const modalContent = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalContent.current &&
                !modalContent.current.contains(event.target)
            ) {
                setIsShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        isShow && (
            <S.Wraper>
                <div className="modal-overlay">
                    <div className="modal-container">
                        <div className="modal-content" ref={modalContent}>
                            <div className="header">
                                <div className="header__left">{modalName}</div>
                                <i
                                    className="fa-solid fa-xmark header__right"
                                    onClick={() => setIsShow(false)}
                                ></i>
                            </div>
                            <div className="content">
                                {children}
                            </div>
                            <div className="action">
                                {footer || <>
                                    <div
                                        className="btn-dash danger"
                                        onClick={() => setIsShow(false)}
                                    >
                                        Thoát
                                    </div>
                                    <div
                                        className="btn-primary danger"
                                        onClick={() => {
                                            if (action) action()
                                            setIsShow(false);
                                        }}
                                    >
                                        Xoá
                                    </div>
                                </>}

                            </div>
                        </div>
                    </div>
                </div>
            </S.Wraper>
        )
    );
};

export default Confirm;
