import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

interface InputProps {
    name: string;
    value: string;
    label: string;
    type: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

/**
 * Base input component
 *
 * @param {Object} props - React props
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {string} props.label - The label of the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.placeholder - The placeholder of the input field.
 * @param {function} props.onChange - The function to call when the input field changes.
 * @returns {React.ReactElement}
 */

const Input = ({ name, value, label, type, placeholder, onChange, onKeyDown, disabled }: InputProps) => {
    return (
        <div className="input-wrapper">
            <label className="input-label">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input"
                onKeyDown={onKeyDown}
                disabled={disabled}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func,
};

export default Input;
