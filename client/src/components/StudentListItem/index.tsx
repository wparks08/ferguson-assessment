import { IdStudent } from "../../interfaces/id-student";
import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { Typography } from "../Typography";

interface StudentListItemProps {
    student: IdStudent;
}

/**
 * React component for rendering a student list item.
 *
 * @param {Object} props - React props.
 * @param props.student - Student data.
 */
const StudentListItem = ({ student }: StudentListItemProps) => {
    return (
        <li>
            <Typography>{student.firstName}</Typography>
            <Typography>{student.lastName}</Typography>
            <Typography>{student.phoneNumber}</Typography>
            <Typography>{student.stateOfResidenceCode}</Typography>
            <Typography>{student.zip}</Typography>
            <Button>Edit</Button>
        </li>
    );
};

StudentListItem.propTypes = {
    student: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        stateOfResidenceCode: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
    }).isRequired,
};

export default StudentListItem;
