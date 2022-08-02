import React from "react";
import "./DialogActions.css";
/**
 * Container component for all actions in a dialog.
 */

interface DialogActionsProps {
    children?: React.ReactNode;
}

const DialogActions = ({ children }: DialogActionsProps) => {
    return (
        <div className="dialog-actions" data-testid={process.env.NODE_ENV === "test" ? "dialog-actions" : undefined}>
            {children}
        </div>
    );
};

export default DialogActions;
