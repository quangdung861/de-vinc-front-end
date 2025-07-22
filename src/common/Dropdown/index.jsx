import React, { useEffect, useRef } from 'react'

const Dropdown = ({ isShow, setIsShow, render, affect }) => {

    const dropdownContainer = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickOutsideDropdown = dropdownContainer.current && !dropdownContainer.current.contains(event.target);
            const clickOutsideAffect = !affect?.current || (affect.current && !affect.current.contains(event.target));
            if (clickOutsideDropdown && clickOutsideAffect) {
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