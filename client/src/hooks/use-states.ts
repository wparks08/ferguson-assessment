import { useEffect, useState } from "react";
import { State } from "../../../src/interfaces/state";
import { urls } from "../config/urls";

/**
 * React hook to fetch a list of states and return them as an array.
 * @returns {Promise<State[]>} - Array of states
 */
export const useStates = () => {
    const [states, setStates] = useState<State[]>([]);

    useEffect(() => {
        fetch(urls.v1.states.find)
            .then((response) => response.json())
            .then((data) => setStates(data));
    }, []);

    return states;
};
