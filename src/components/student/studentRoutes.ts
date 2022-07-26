import { Application } from "express";
import { urls } from "../../config/urls";
import { createStudent, deleteStudent, findStudent, getStudent, updateStudent } from "./studentController";

export const studentRoutes = (app: Application) => {
    app.post(urls.v1.student.create, createStudent);
    app.get(urls.v1.student.find, findStudent);
    app.get(urls.v1.student.get, getStudent);
    app.put(urls.v1.student.update, updateStudent);
    app.delete(urls.v1.student.delete, deleteStudent);
};
