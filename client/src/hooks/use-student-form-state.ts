import { useEffect, useState } from "react";
import { Student } from "../../../src/interfaces/student";

interface UseStudentFormStateParams {
    student?: Student;
}

interface UpdateStudentFieldParams {
    name: string;
    value: string;
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

    useEffect(() => {
        setStudent(
            params?.student || {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                stateOfResidenceCode: "",
                zip: "",
            }
        );
    }, [params?.student]);

    const updateStudentField = ({ name, value }: UpdateStudentFieldParams) => {
        setStudent({ ...student, [name]: value });
    };

    const clearStudent = () => {
        setStudent({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            stateOfResidenceCode: "",
            zip: "",
        });
    };

    return { student, updateStudentField, clearStudent };
};
