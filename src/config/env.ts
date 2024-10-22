import { RequiredInDotEnv } from "../errors/RequiredInDotEnv.ts";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

if (!process.env.API_KEY) {
  throw new RequiredInDotEnv("API_KEY");
}

export const env = { API_KEY };
