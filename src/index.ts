import server from "./server";
import { dbClient } from "./db";
import { DB_NAME } from "./db/config";

// Default port
const defaultPort = 3001;

// Get port from environment or use the default.
const PORT = process.env.PORT || defaultPort;

// Start the server
server.listen(PORT);

process.on("SIGINT", async () => {
    // If node environment is not production, drop all database collections
    if (process.env.NODE_ENV !== "production") {
        console.log("Dropping database...");
        await dbClient.db(DB_NAME).dropDatabase((error) => {
            if (error) {
                console.error(error);
            } else {
                console.log("Database dropped.");
            }
        });
    }

    // Close the database connection
    try {
        await dbClient.close();
        console.log("Database connection closed.");
        process.exitCode = 0;
    } catch (e) {
        console.error(e);
        process.exitCode = 1;
    }

    // Close the server
    console.log("Closing server...");
    server.close((err) => {
        if (err) {
            console.error(err);
            process.exitCode = 1;
        } else {
            console.log("Server closed");
            process.exitCode = 0;
        }
    });
});
