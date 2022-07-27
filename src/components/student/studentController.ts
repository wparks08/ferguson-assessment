import { Request, Response } from "express";
import studentDb from "./studentDb";
import { Student } from "../../interfaces/student";
import { formatPhoneNumber, scrubPhoneNumber } from "./util";

/**
 * Create a new student
 *
 * Requires a JSON body with the following properties:
 * - firstName: string
 * - lastName: string
 * - stateOfResidenceCode: string
 * - zip: string
 * - phoneNumber: string
 *
 * Responds with a 201 Created status on success.
 *
 * ### This method assumes that the JSON body has already been validated, and will perform no validation of its own.
 * @param req
 * @param res
 */
export const createStudent = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, stateOfResidenceCode, zip, phoneNumber } = req.body as Student;
        await studentDb.create({
            firstName,
            lastName,
            stateOfResidenceCode,
            zip,
            phoneNumber: scrubPhoneNumber(phoneNumber.toString()),
        });
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be created." });
    }
};

/**
 * Represents the allowable query parameters for finding students
 */
interface FindStudentRequest extends Request {
    query: {
        limit?: string;
        offset?: string;
        sortBy?: keyof Student;
        order?: "asc" | "desc";
    };
}

/**
 * Lists all students
 *
 * Supports pagination and sorting by adding query parameters:
 * - limit: number of students to return
 * - offset: number of students to skip
 * - sort: sort by field
 * - order: sort order (asc or desc)
 * @param req
 * @param res
 */
export const listStudents = async (req: FindStudentRequest, res: Response) => {
    const { limit = "0", offset = "0", sortBy, order = "asc" } = req.query;
    try {
        const students = await studentDb.find({ limit: parseInt(limit), offset: parseInt(offset), sortBy, order });
        res.json(
            students.map((student) => {
                return { ...student, phoneNumber: formatPhoneNumber(student.phoneNumber) };
            })
        );
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Students could not be retrieved." });
    }
};

/**
 * Gets a student by id
 * @param req
 * @param res
 */
export const getStudent = async (req: Request, res: Response) => {
    try {
        const student = await studentDb.get(req.params.id);
        res.json(student);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be retrieved." });
    }
};

/**
 * Updates a student by id
 * @param req
 * @param res
 */
export const updateStudent = async (req: Request, res: Response) => {
    try {
        await studentDb.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be updated." });
    }
};

/**
 * Deletes a student by id
 * @param req
 * @param res
 */
export const deleteStudent = async (req: Request, res: Response) => {
    try {
        await studentDb.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be deleted." });
    }
};
