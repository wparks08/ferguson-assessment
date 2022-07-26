import express from "express";
import { statusRoutes } from "../components/status/statusRoutes";
import { studentRoutes } from "../components/student/studentRoutes";

const app = express();

app.use(express.json());

statusRoutes(app);
studentRoutes(app);

export default app;
