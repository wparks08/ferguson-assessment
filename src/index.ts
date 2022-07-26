import server from "./server";

process.on("SIGINT", () => {
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
