import React from "react";
import PropTypes from "prop-types";

interface TextInputProps {
    name: string;
    value: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * React component representing a text input field.
 *
 * @param {Object} props - React props
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {string} props.label - The label of the input field.
 * @param {function} props.onChange - The function to call when the input field changes.
 * @returns {React.ReactElement}
 * @constructor
 */
const TextInput = ({ name, value, label, onChange }: TextInputProps) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" name={name} value={value} onChange={onChange} />
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextInput;
