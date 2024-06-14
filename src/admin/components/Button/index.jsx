import React, { forwardRef, useEffect, useRef } from 'react';
import "./styles.scss"
import clsx from 'clsx';

const Button = forwardRef(({ text, icon, onClick, className }, ref) => {
  const internalRef = useRef(null);
  const buttonRef = ref || internalRef;

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('click', onClick);
    }
  
    return () => {
      if (button) {
        button.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return (
    <button ref={buttonRef} className={clsx(className || "btn-primary")}>
      {icon}
      {text}
    </button>
  );
});

export default Button;