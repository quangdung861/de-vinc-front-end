import React, { useEffect, useRef } from 'react'

const Dropdown = ({ isShow, setIsShow, render }) => {

    const dropdownContainer = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownContainer.current &&
                !dropdownContainer.current.contains(event.target)
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
        <div ref={dropdownContainer}>
            {isShow && render()}
        </div>
    )
}

export default Dropdown