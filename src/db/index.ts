import { MongoClient } from "mongodb";
import { DB_NAME, DB_URI } from "./config";
import { runSeed } from "./seed";
import log from "../log";

const dbClient = new MongoClient(DB_URI);

/**
 * On connection to the database, run the seed operation.
 */
dbClient.on("open", async () => {
    log.info(`[Db] Connected to database: ${DB_NAME}`);
    await runSeed();
});

const database = dbClient.db(DB_NAME);

export default database;

export { dbClient };
