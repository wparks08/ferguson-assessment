import express from "express";
import { statusRoutes } from "../components/status/statusRoutes";

const app = express();

statusRoutes(app);

export default app;
