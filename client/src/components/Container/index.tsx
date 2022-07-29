import React from "react";
import "./Container.css";

interface ContainerParams {
    children: React.ReactNode;
}

/**
 * Basic container component.
 *
 * @param {Object} props - React props.
 * @param props.children - Child elements.
 * @constructor
 */
const Container = ({ children }: ContainerParams) => {
    return <div className="container">{children}</div>;
};

export default Container;
