import React from "react";
import TextInput from "../TextInput";
import PropTypes from "prop-types";
import PhoneInput from "../PhoneInput";
import StateDropdown from "../StateDropdown";
import { Student } from "../../../../src/interfaces/student";

interface StudentInfoFormParams {
    student: Student;
    updateFn?: ({ name, value }: { name: string; value: string }) => void;
    editing?: boolean;
}

/**
 * Create student form
 *
 * @param {Object} props - React props
 * @param props.student - Student to create
 * @param props.updateFn - Function to update student field
 */
const StudentInfoForm = ({ student, updateFn, editing = false }: StudentInfoFormParams) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (updateFn) {
            const { name, value } = event.target;
            updateFn({ name, value });
        }
    };

    return (
        <div>
            <form>
                <TextInput
                    name="firstName"
                    value={student.firstName}
                    label="First Name"
                    onChange={handleChange}
                    disabled={!editing}
                />
                <TextInput
                    name="lastName"
                    value={student.lastName}
                    label="Last Name"
                    onChange={handleChange}
                    disabled={!editing}
                />
                <PhoneInput
                    name="phoneNumber"
                    value={student.phoneNumber}
                    label="Phone Number"
                    onChange={handleChange}
                    disabled={!editing}
                />
                <StateDropdown value={student.stateOfResidenceCode} onChange={handleChange} disabled={!editing} />
                <TextInput name="zip" value={student.zip} label="Zip" onChange={handleChange} disabled={!editing} />
            </form>
        </div>
    );
};

StudentInfoForm.propTypes = {
    student: PropTypes.object.isRequired,
    updateFn: PropTypes.func.isRequired,
};

export default StudentInfoForm;
