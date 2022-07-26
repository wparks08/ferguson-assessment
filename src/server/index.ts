import app from "../app";

const defaultPort = 3001;
const PORT = process.env.PORT || defaultPort;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export default server;
