import React from "react";
import "./Button.css";

interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

/**
 * React component encapsulating all button components.
 *
 * @param {Object} props - React props.
 * @param props.children - Child elements.
 * @param props.variant - Type of button.
 * @constructor
 */
const Button = ({ children, variant, onClick }: ButtonProps) => {
    const className = `button ${variant ? `button-${variant}` : ""}`;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;
