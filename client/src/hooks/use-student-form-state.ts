import React, { useState } from "react";
import { Student } from "../../../src/interfaces/student";

interface UseStudentFormStateParams {
    student?: Student;
}

/**
 * Hook to manage `Student` state in a form
 *
 * @param {Object} params - Parameters to initialize the form (optional)
 * @param {Student} params.student  Student to edit
 * @returns {Object} - Object with `student`, `handleChange`, and `handleStateChange functions
 */
export const useStudentFormState = (params?: UseStudentFormStateParams) => {
    const [student, setStudent] = useState<Student>(
        params?.student || {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            stateOfResidenceCode: "",
            zip: "",
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setStudent({ ...student, stateOfResidenceCode: value });
    };

    return { student, handleChange, handleStateChange };
};
