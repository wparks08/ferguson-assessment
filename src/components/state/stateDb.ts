import { State } from "../../interfaces/state";
import db from "../../db";
import { ObjectId } from "mongodb";
import { verifyAllStates, getAllStates, setAllStates } from "../../cache";

const collection = db.collection<State>("states");

export default {
    get: async (id: string) => {
        console.log("getting state...");
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    find: async () => {
        console.log("finding states...");
        if (await verifyAllStates()) {
            console.log("states found in cache");
            return await getAllStates();
        } else {
            console.log("states not found in cache");
            const states = await collection.find().toArray();
            await setAllStates(states);
            return states;
        }
    },
};
