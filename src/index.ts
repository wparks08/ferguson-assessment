import server from "./server";
import { dbClient } from "./db";
import { DB_NAME } from "./db/config";
import log from "./log";

// Default port
const defaultPort = 3001;

// Get port from environment or use the default.
const PORT = process.env.PORT || defaultPort;

// Start the server
log.info("Starting server...");
server.listen(PORT);

process.on("SIGINT", async () => {
    // If node environment is not production, drop all database collections
    if (process.env.NODE_ENV !== "production") {
        log.info(`[Shutdown] Dropping database: ${DB_NAME}`);
        await dbClient.db(DB_NAME).dropDatabase((error) => {
            if (error) {
                log.error(`[Shutdown] Error dropping database: ${error}`);
            } else {
                log.info(`[Shutdown] Database dropped: ${DB_NAME}`);
            }
        });
    }

    // Close the database connection
    try {
        await dbClient.close();
        log.info(`[Shutdown] Database connection closed: ${DB_NAME}`);
        process.exitCode = 0;
    } catch (e) {
        log.error(`[Shutdown] Error closing database connection: ${e}`);
        process.exitCode = 1;
    }

    // Close the server
    log.info("[Shutdown] Closing server");
    server.close((err) => {
        if (err) {
            log.error(`[Shutdown] Error closing server: ${err}`);
            process.exitCode = 1;
        } else {
            log.info("[Shutdown] Server closed");
            process.exitCode = 0;
        }
    });
});
