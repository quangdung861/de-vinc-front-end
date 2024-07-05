import React, { useEffect, useState } from "react";
import "./styles.scss";

const BtnToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        backToTopButton && (
            <div className="scroll-to" onClick={scrollUp}>
                <i className="fa-solid fa-chevron-up"></i>
            </div>
        )
    );
};

export default BtnToTop;
