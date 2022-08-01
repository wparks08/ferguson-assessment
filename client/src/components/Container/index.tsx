import React from "react";
import "./Container.css";

interface ContainerParams {
    children: React.ReactNode;
    maxWidth?: number;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    column?: boolean;
    row?: boolean;
}

/**
 * Basic container component.
 *
 * @param {Object} props - React props.
 * @param props.children - Child elements.
 * @constructor
 */
const Container = ({ children, maxWidth, justifyContent, alignItems, column = true, row }: ContainerParams) => {
    const style: React.CSSProperties = {
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        justifyContent: justifyContent ? justifyContent : undefined,
        alignItems: alignItems ? alignItems : undefined,
        flexDirection: column ? "column" : row ? "row" : undefined,
    };

    return (
        <div className="container" style={style}>
            {children}
        </div>
    );
};

export default Container;
