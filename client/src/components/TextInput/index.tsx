import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

interface TextInputProps {
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
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
const TextInput = ({ name, value, label, onChange, disabled }: TextInputProps) => {
    return <Input name={name} value={value} label={label} type="text" onChange={onChange} disabled={disabled} />;
};

TextInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;
