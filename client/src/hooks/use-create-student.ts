import { useState } from "react";
import { urls } from "../config/urls";
import { Student } from "../../../src/interfaces/student";

interface UseCreateStudentParams {
    onSuccess: () => unknown;
}

/**
 * Hook to handle creating a student
 */
export const useCreateStudent = ({ onSuccess }: UseCreateStudentParams) => {
    const [status, setStatus] = useState<string>("");
    const [error, setError] = useState<string>("");

    const submitStudent = async (student: Student) => {
        setStatus("");
        setError("");
        console.log(student);
        try {
            const response = await fetch(urls.v1.students.create, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student),
            });
            if (response.ok) {
                setStatus("Student created successfully.");
                onSuccess();
            } else {
                setError("Error creating student.");
            }
        } catch (error) {
            setError((error as Error).message);
        }
    };

    const clearStatus = () => {
        setStatus("");
        setError("");
    };

    return { submitStudent, status, error, clearStatus };
};
