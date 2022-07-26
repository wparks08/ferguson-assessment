import { Application } from "express";
import { urls } from "../../config/urls";
import { createStudent, deleteStudent, listStudents, getStudent, updateStudent } from "./studentController";
import { validateCreateStudentBody } from "./studentValidators";
import log from "../../log";

/**
 * @description - Applies the student routes to the given express app.
 * @param app - The express app.
 */
export const studentRoutes = (app: Application) => {
    log.info("[StudentRoutes] Applying student routes to: ", { urls: JSON.stringify(urls.v1.student) });
    app.post(urls.v1.student.create, validateCreateStudentBody, createStudent);
    app.get(urls.v1.student.find, listStudents);
    app.get(urls.v1.student.get, getStudent);
    app.put(urls.v1.student.update, updateStudent);
    app.delete(urls.v1.student.delete, deleteStudent);
};
