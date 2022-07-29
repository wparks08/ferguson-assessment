import React, { Children } from "react";
import PropTypes from "prop-types";
import "./StudentList.css";

interface StudentListParams {
    children?: React.ReactNode;
}

/**
 * React component for wrapping a list of `StudentListItem` components.
 *
 * @param {Object} props - React props.
 * @param props.children - Child elements.
 * @constructor
 */
const StudentList = ({ children }: StudentListParams) => {
    if (Children.count(children) === 0) {
        return <em>No students found.</em>;
    }
    return <ul className="student-list">{children}</ul>;
};

StudentList.propTypes = {
    children: PropTypes.node,
};

export default StudentList;
