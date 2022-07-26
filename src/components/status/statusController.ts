import { Request, Response } from "express";

/**
 * @description - Responds with 200 OK if the server is healthy.
 * @param {Request} req
 * @param {Response} res
 */
export const healthCheck = (req: Request, res: Response) => {
    res.sendStatus(200);
};

/**
 * @description - Responds with the memory usage of the server process.
 * @param {Request} req
 * @param {Response} res
 */
export const memoryUsage = (req: Request, res: Response) => {
    res.json({
        memoryUsage: process.memoryUsage(),
    });
};
