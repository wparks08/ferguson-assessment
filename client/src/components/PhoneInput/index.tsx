import React from "react";
import Input from "../Input";

interface PhoneInputProps {
    name?: string;
    value?: string;
    label?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

/**
 * React component representing a `tel` input field.
 *
 * Masks the input field to only allow phone numbers.
 * Phone numbers are formatted as `(###) ###-####`.
 *
 * @param {Object} props
 * @param {string} props.name - The name of the input field.
 * @param {string} props.value - The value of the input field.
 * @param {string} props.label - The label of the input field.
 * @param {function} props.onChange - The function to call when the input field changes.
 * @returns {React.ReactElement}
 * @constructor
 */
const PhoneInput = ({ name, value, label, onChange, disabled }: PhoneInputProps) => {
    const placeholder = "(###) ###-####";

    /**
     * Mask the input field to the format `(###) ###-####`.
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        event.target.value = formatPhoneNumber(value);
        if (onChange) {
            onChange(event);
        }
    };

    /**
     * Remove non-numeric characters from the phone number.
     */
    const scrubPhoneNumber = (phoneNumber: string) => {
        return phoneNumber.replace(/\D/g, "");
    };

    /**
     * Format the phone number to `(###) ###-####`.
     */
    const formatPhoneNumber = (phoneNum: string) => {
        const phoneNumber = scrubPhoneNumber(phoneNum);
        if (phoneNumber.length === 0) {
            return "";
        } else if (phoneNumber.length < 4) {
            return `(${phoneNumber}`;
        } else if (phoneNumber.length < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else if (phoneNumber.length < 10) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        } else {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        }
    };

    /**
     * Ignore non-numeric characters when pressing backspace
     */
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace") {
            event.preventDefault();
            const { value } = event.target;
            event.target.value = formatPhoneNumber(value.slice(0, -1));
            handleChange(event);
        }
    };

    return (
        <Input
            name={name}
            value={value}
            label={label}
            type="tel"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

export default PhoneInput;
