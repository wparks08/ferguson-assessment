import { Request, Response } from "express";
import stateDb from "./stateDb";

/**
 * Get a state by its `stateCode`
 * @param req
 * @param res
 */
export const getState = async (req: Request, res: Response) => {
    try {
        const state = await stateDb.get(req.params.stateCode);
        res.json(state);
    } catch (err) {
        console.error(err);
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
        res.json(states);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "States could not be retrieved." });
    }
};
