import express from "express";
import status from "../components/status";
import student from "../components/student";
import state from "../components/state";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.set("trust proxy", 1);
}

state.routes(app);
status.routes(app);
student.routes(app);

app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

export default app;
