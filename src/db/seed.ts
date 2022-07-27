import stateData from "./stateData.json";
import db from "./index";
import { State } from "../interfaces/state";

/**
 * Seed the database with state data.
 */
const seedStateData = async () => {
    const stateCollection = db.collection<State>("states");

    console.log("seeding state data...");
    await stateCollection.insertMany(stateData);
    console.log("state data seeded.");
};

/**
 * Check the states collection to make sure all data matches the seed data.
 */
const checkStateData = async () => {
    const stateCollection = db.collection<State>("states");

    console.log("checking state data...");
    const states = await stateCollection.find().toArray();
    const stateCodes = states.map((state) => state.stateCode);
    const seedStateCodes = stateData.map((state) => state.stateCode);
    const missingStateCodes = seedStateCodes.filter((stateCode) => !stateCodes.includes(stateCode));
    if (missingStateCodes.length > 0) {
        console.log("state data is missing:", missingStateCodes);
        return false;
    }
    console.log("state data is complete.");
    return true;
};

/**
 * Ensure a unique index on the stateCode field.
 */
const ensureStateCodeIndex = async () => {
    const stateCollection = db.collection<State>("states");

    console.log("ensuring state code index...");
    await stateCollection.createIndex({ stateCode: 1 }, { unique: true });
    console.log("state code index ensured.");
};

/**
 * Run all seed operations by checking if data exists and then seeding if necessary, as well as adding any missing indexes.
 */
export const runSeed = async () => {
    const stateDataExists = await checkStateData();
    if (!stateDataExists) {
        await seedStateData();
    }
    await ensureStateCodeIndex();
};
