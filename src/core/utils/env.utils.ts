import { config } from "dotenv";
config({ path: `.env` });

export const CREDENTIALS = process.env["CREDENTIALS"] === "true";
export const ENV = process.env;
