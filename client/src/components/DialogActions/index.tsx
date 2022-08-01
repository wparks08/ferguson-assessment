import React from "react";
import "./DialogActions.css";
/**
 * Container component for all actions in a dialog.
 */

interface DialogActionsProps {
    children: React.ReactNode;
}

const DialogActions = ({ children }: DialogActionsProps) => {
    return <div className="dialog-actions">{children}</div>;
};

export default DialogActions;
