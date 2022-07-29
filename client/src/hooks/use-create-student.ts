import { useStudentFormState } from "./use-student-form-state";
import React, { useState } from "react";
import { urls } from "../config/urls";

/**
 * Hook to handle creating a student
 */
export const useCreateStudent = () => {
    const { student, handleChange, handleStateChange } = useStudentFormState();

    const [status, setStatus] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            } else {
                setError("Error creating student.");
            }
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return { student, handleChange, handleStateChange, handleSubmit, status, error };
};
