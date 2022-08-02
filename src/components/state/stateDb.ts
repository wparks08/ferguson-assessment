import { State } from "../../interfaces/state";
import db from "../../db";
import { ObjectId } from "mongodb";
import { verifyAllStates, getAllStates, setAllStates } from "../../cache";
import log from "../../log";

const collection = db.collection<State>("states");

export default {
    get: async (id: string) => {
        log.info(`[StateDb] Getting state with id: ${id}`);
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    find: async () => {
        log.info("[StateDb] Getting all states");
        if (await verifyAllStates()) {
            log.info("[StateDb] Found states in cache");
            return await getAllStates();
        } else {
            log.info("[StateDb] States not found in cache, retrieving from database");
            const states = await collection.find().toArray();
            await setAllStates(states);
            return states;
        }
    },
};
