import React from "react";
import "./Button.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

/**
 * React component encapsulating all button components.
 *
 * @param {Object} props - React props.
 * @param props.children - Child elements.
 * @param props.variant - Type of button.
 * @constructor
 */
const Button = ({ children, variant }: ButtonProps) => {
    const className = `button ${variant ? `button-${variant}` : ""}`;

    return <button className={className}>{children}</button>;
};

export default Button;
