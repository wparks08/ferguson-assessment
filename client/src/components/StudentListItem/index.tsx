import { IdStudent } from "../../interfaces/id-student";
import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { Typography } from "../Typography";

interface StudentListItemProps {
    student: IdStudent;
    onViewStudent: (student: IdStudent) => void;
}

/**
 * React component for rendering a student list item.
 *
 * @param {Object} props - React props.
 * @param props.student - Student data.
 */
const StudentListItem = ({ student, onViewStudent }: StudentListItemProps) => {
    return (
        <li>
            <Typography variant="p">
                {student.firstName} {student.lastName}
            </Typography>
            <Button variant="secondary" onClick={() => onViewStudent(student)}>
                View
            </Button>
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
