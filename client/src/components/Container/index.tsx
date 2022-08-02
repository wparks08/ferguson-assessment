import React from "react";
import "./Container.css";

interface ContainerParams {
    children?: React.ReactNode;
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
 * @param props.maxWidth - Max width of the container.
 * @param props.justifyContent - Justify content of the container.
 * @param props.alignItems - Align items of the container.
 * @param props.column - (default) Whether the container is a column.
 * @param props.row - Whether the container is a row.
 * @constructor
 */
const Container = ({ children, maxWidth, justifyContent, alignItems, column = true, row }: ContainerParams) => {
    const style: React.CSSProperties = {
        maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        justifyContent: justifyContent ? justifyContent : undefined,
        alignItems: alignItems ? alignItems : undefined,
        flexDirection: row ? "row" : "column",
    };

    return (
        <div
            className="container"
            style={style}
            data-testid={process.env.NODE_ENV === "test" ? "container" : undefined}
        >
            {children}
        </div>
    );
};

export default Container;
