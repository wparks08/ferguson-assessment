import React from "react";
import { useStates } from "../../hooks/use-states";
import "../Input/Input.css";

interface StateDropdownProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => unknown;
    disabled?: boolean;
}

/**
 * React component representing a dropdown menu.
 *
 * @param {Object} props
 * @param {function} props.onChange - The function to call when the dropdown menu changes.
 */
const StateDropdown = ({ value, onChange, disabled }: StateDropdownProps) => {
    const states = useStates();

    return (
        <div className="input-wrapper">
            <label className="input-label">State of Residence</label>
            <select name="stateOfResidenceCode" onChange={onChange} className="input" value={value} disabled={disabled}>
                <option value="">Select a state</option>
                {states.map((state) => (
                    <option key={state.stateCode} value={state.stateCode}>
                        {state.stateName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StateDropdown;
