import stateData from "./stateData.json";
import db from "./index";
import { State } from "../interfaces/state";
import log from "../log";

/**
 * Seed the database with state data.
 */
const seedStateData = async () => {
    const stateCollection = db.collection<State>("states");

    log.info("[Db] Seeding state data...");
    await stateCollection.insertMany(stateData);
    log.info("[Db] State data seeded.");
};

/**
 * Check the states collection to make sure all data matches the seed data.
 */
const checkStateData = async () => {
    const stateCollection = db.collection<State>("states");

    log.info("[Db] Checking state data...");
    const states = await stateCollection.find().toArray();
    const stateCodes = states.map((state) => state.stateCode);
    const seedStateCodes = stateData.map((state) => state.stateCode);
    const missingStateCodes = seedStateCodes.filter((stateCode) => !stateCodes.includes(stateCode));
    if (missingStateCodes.length > 0) {
        log.info("[Db] State data is missing: ", missingStateCodes);
        return false;
    }
    log.info("[Db] State data is valid.");
    return true;
};

/**
 * Ensure a unique index on the stateCode field.
 */
const ensureStateCodeIndex = async () => {
    const stateCollection = db.collection<State>("states");

    log.info("[Db] Ensuring state code index...");
    await stateCollection.createIndex({ stateCode: 1 }, { unique: true });
    log.info("[Db] State code index ensured.");
};

/**
 * Run all seed operations by checking if data exists and then seeding if necessary, as well as adding any missing indexes.
 */
export const runSeed = async () => {
    log.info("[Db] Running seed...");
    const stateDataExists = await checkStateData();
    if (!stateDataExists) {
        await seedStateData();
    }
    await ensureStateCodeIndex();
    log.info("[Db] Seed complete.");
};
