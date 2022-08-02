import morgan, { StreamOptions } from "morgan";

import { Logger } from "./winston";

const stream: StreamOptions = {
    write: (message: string) => {
        Logger.http(message);
    },
};

const morganMiddleware = morgan("dev", { stream });

export { morganMiddleware };
