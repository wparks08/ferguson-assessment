import { Application } from "express";
import { healthCheck, memoryUsage } from "./statusController";
import { urls } from "../../config/urls";
import log from "../../log";

/**
 * @description - Applies the status routes to the given express app.
 * @param app - The express app.
 */
export const statusRoutes = (app: Application) => {
    log.info("[StatusRoutes] Applying status routes to: ", { urls: JSON.stringify(urls.v1.status) });
    app.get(urls.v1.status.healthCheck, healthCheck);
    app.get(urls.v1.status.memoryUsage, memoryUsage);
};
