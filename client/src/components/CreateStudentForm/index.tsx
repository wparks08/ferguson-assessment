import { useCreateStudent } from "../../hooks/use-create-student";
import React from "react";
import TextInput from "../TextInput";
import PropTypes from "prop-types";
import PhoneInput from "../PhoneInput";
import StateDropdown from "../StateDropdown";
import Button from "../Button";
import { Typography } from "../Typography";

interface CreateStudentFormParams {
    onSubmit: () => unknown;
}

/**
 * Create student form
 *
 * @param {Object} props - React props
 * @param {function} props.onSubmit - Callback to handle form submission
 */
const CreateStudentForm = ({ onSubmit }: CreateStudentFormParams) => {
    const { student, handleChange, handleStateChange, handleSubmit, status, error } = useCreateStudent();

    const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        await handleSubmit(event);
        onSubmit();
    };

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <TextInput name="firstName" value={student.firstName} label="First Name" onChange={handleChange} />
                <TextInput name="lastName" value={student.lastName} label="Last Name" onChange={handleChange} />
                <PhoneInput
                    name="phoneNumber"
                    value={student.phoneNumber}
                    label="Phone Number"
                    onChange={handleChange}
                />
                <StateDropdown onChange={handleStateChange} />
                <label>Zip</label>
                <input type="text" name="zip" value={student.zip} onChange={handleChange} />
                <Button variant="secondary">Save</Button>
            </form>
            <Typography variant="p" color="info">
                {status}
            </Typography>
            <Typography variant="p" color="warning">
                {error}
            </Typography>
        </div>
    );
};

CreateStudentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default CreateStudentForm;
