import dotenv from "dotenv";

dotenv.config();

const appName = process.env.APP_NAME;
const port = process.env.PORT;

console.log("Application:", appName);
console.log("Port:", port);