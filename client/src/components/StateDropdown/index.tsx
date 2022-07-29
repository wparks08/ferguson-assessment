import React from "react";
import { useStates } from "../../hooks/use-states";

interface StateDropdownProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => unknown;
}

/**
 * React component representing a dropdown menu.
 *
 * @param {Object} props
 * @param {function} props.onChange - The function to call when the dropdown menu changes.
 */
const StateDropdown = ({ onChange }: StateDropdownProps) => {
    const states = useStates();

    return (
        <div>
            <label>State of Residence</label>
            <select name="stateOfResidenceCode" onChange={onChange}>
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
