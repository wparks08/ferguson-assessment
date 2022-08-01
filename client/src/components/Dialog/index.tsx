import * as React from "react";
import "./Dialog.css";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

/**
 * React component for a pop-up dialog.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the dialog is open or not.
 * @param {function} props.onClose - The function to call when the dialog is closed.
 * @param {React.ReactNode} props.children - The contents of the dialog.
 */
const Dialog = ({ children, isOpen, onClose }: DialogProps) => {
    return (
        <div className={`${isOpen ? "dialog" : "hidden"}`}>
            <div className="dialog-overlay" onClick={onClose} />
            <div className="dialog-content">{children}</div>
        </div>
    );
};

export default Dialog;
