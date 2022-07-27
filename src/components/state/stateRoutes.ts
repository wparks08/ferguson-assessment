import { Application } from "express";
import { urls } from "../../config/urls";
import { listStates, getState } from "./stateController";

/**
 * @description - Applies the state routes to the given express app.
 * @param app - the express app.
 */
export const stateRoutes = (app: Application) => {
    app.get(urls.v1.state.get, getState);
    app.get(urls.v1.state.find, listStates);
};
