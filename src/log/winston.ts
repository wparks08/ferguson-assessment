import winston from "winston";

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const level = () => {
    if (process.env.NODE_ENV === "production") {
        return "http";
    }
    return "debug";
};

const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "cyan",
    debug: "white",
};

winston.addColors(colors);

const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(({ timestamp, level, message, filename, ...meta }) => {
        return `${timestamp} ${level}: ${message} ${Object.keys(meta).length > 0 ? JSON.stringify(meta) : ""}`;
    })
);

const transports = [new winston.transports.Console()];

const getLabel = (callingModule: any) => {
    const { filename } = callingModule;
    return filename.split("/").pop();
};

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

export { Logger };
