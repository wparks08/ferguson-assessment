import express from "express";
import status from "../components/status";
import student from "../components/student";
import state from "../components/state";

const app = express();

app.use(express.json());

state.routes(app);
status.routes(app);
student.routes(app);

export default app;
