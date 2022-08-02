import { Application } from "express";
import { urls } from "../../config/urls";
import { listStates, getState } from "./stateController";
import log from "../../log";

/**
 * @description - Applies the state routes to the given express app.
 * @param app - the express app.
 */
export const stateRoutes = (app: Application) => {
    log.info("[StateRoutes] Applying state routes to: ", { urls: JSON.stringify(urls.v1.state) });
    app.get(urls.v1.state.get, getState);
    app.get(urls.v1.state.find, listStates);
};
