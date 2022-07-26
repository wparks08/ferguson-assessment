import { Application } from "express";
import { healthCheck, memoryUsage } from "./statusController";
import { urls } from "../../config/urls";

/**
 * @description - Applies the status routes to the given express app.
 * @param {Express} app - The express app.
 */
export const statusRoutes = (app: Application) => {
    app.get(urls.v1.status.healthCheck, healthCheck);
    app.get(urls.v1.status.memoryUsage, memoryUsage);
};
