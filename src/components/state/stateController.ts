import { Request, Response } from "express";
import stateDb from "./stateDb";
import log from "../../log";

/**
 * Get a state by its `stateCode`
 * @param req
 * @param res
 */
export const getState = async (req: Request, res: Response) => {
    log.info(`[StateController] Getting state with stateCode: ${req.params.stateCode}`);
    try {
        const state = await stateDb.get(req.params.stateCode);
        log.info(`[StateController] Found state with stateCode: ${req.params.stateCode}`);
        res.json(state);
    } catch (err) {
        log.error(`[StateController] ${err}`);
        res.status(500).send({ error: "State could not be retrieved." });
    }
};

/**
 * List all states
 * @param req
 * @param res
 */
export const listStates = async (req: Request, res: Response) => {
    try {
        const states = await stateDb.find();
        log.info(`[StateController] Responding with ${states?.length} states`);
        res.json(states);
    } catch (err) {
        log.error(`[StateController] ${err}`);
        res.status(500).send({ error: "States could not be retrieved." });
    }
};
