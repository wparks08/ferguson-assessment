import { Request, Response } from "express";
import studentDb from "./studentDb";

//TODO - add express-validator to validate request body
export const createStudent = async (req: Request, res: Response) => {
    try {
        await studentDb.create(req.body);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be added." });
    }
};

export const findStudent = async (req: Request, res: Response) => {
    try {
        const students = await studentDb.find();
        res.json(students);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Students could not be retrieved." });
    }
};

export const getStudent = async (req: Request, res: Response) => {
    try {
        const student = await studentDb.get(req.params.id);
        res.json(student);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be retrieved." });
    }
};

export const updateStudent = async (req: Request, res: Response) => {
    try {
        await studentDb.update(req.params.id, req.body);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be updated." });
    }
};

export const deleteStudent = async (req: Request, res: Response) => {
    try {
        await studentDb.delete(req.params.id);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Student could not be deleted." });
    }
};
