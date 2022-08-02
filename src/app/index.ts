import express from "express";
import status from "../components/status";
import student from "../components/student";
import state from "../components/state";
import path from "path";
import log from "../log";
import { morganMiddleware } from "../log/morgan";

log.info("[App] Starting server...");
const app = express();

log.info("[App] Configuring server...");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morganMiddleware);
log.info("[App] Configured server.");

log.info("[App] Configuring routes...");
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.set("trust proxy", 1);
}

state.routes(app);
status.routes(app);
student.routes(app);
log.info("[App] Configured routes.");

app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

export default app;
