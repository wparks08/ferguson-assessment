import app from "../app";
import * as http from "http";
import { dbClient } from "../db";
import net from "net";

/**
 * Create a server by passing the express app to the http module
 */
const server = http.createServer(app);

/**
 * Connect to the database when the server is started
 */
server.on("listening", async () => {
    const { port } = server.address() as net.AddressInfo;
    console.log(`Server listening on port ${port}`);
    await dbClient.connect();
});

export default server;
