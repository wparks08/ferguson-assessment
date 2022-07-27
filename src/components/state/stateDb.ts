import { State } from "../../interfaces/state";
import db from "../../db";
import { ObjectId } from "mongodb";

const collection = db.collection<State>("states");

export default {
    get: async (id: string) => {
        console.log("getting state...");
        return await collection.findOne({ _id: new ObjectId(id) });
    },
    find: async () => {
        console.log("finding states...");
        return await collection.find().toArray();
    },
};
