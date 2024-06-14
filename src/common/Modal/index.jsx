import React, { useRef, useEffect } from "react";
import * as S from "./styles";

const Modal = ({ isShow, setIsShow, modalName, children }) => {
    const modalContainer = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalContainer.current &&
                !modalContainer.current.contains(event.target)
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
            <S.Wrapper>
                <S.Container>
                    <div className="modal-overlay">
                        <div className="modal-container" ref={modalContainer}>
                            <div className="modal-content">
                                <div className="header">
                                    <div className="header__left">{modalName}</div>
                                    <i
                                        className="fa-solid fa-xmark header__right"
                                        onClick={() => setIsShow(false)}
                                    ></i>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </S.Container>
            </S.Wrapper>
        )
    );
};

export default Modal;
