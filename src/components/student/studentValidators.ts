import { Request, Response } from "express";
import { scrubPhoneNumber } from "./util";
import { Student } from "../../interfaces/student";

/**
 * Private interface to allow indexing a `Student` object using a string key.
 */
interface StringIndexedStudent extends Student {
    [key: string]: string;
}

/**
 * Represents all required fields for adding a new student.
 */
const requiredCreateFields = ["firstName", "lastName", "phoneNumber", "stateOfResidenceCode", "zip"];

/**
 * Middleware to validate JSON body for creating a Student
 */
export const validateCreateStudentBody = async (req: Request, res: Response, next: () => void) => {
    try {
        const student = req.body as StringIndexedStudent;
        for (const field of requiredCreateFields) {
            if (!student[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        if (scrubPhoneNumber(student.phoneNumber.toString()).length !== 10) {
            throw new Error("Phone number must be 10 digits.");
        }
        next();
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: "Invalid student." });
    }
};
