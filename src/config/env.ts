import { InvalidType } from "../errors/InvalidType.ts";
import { RequiredInDotEnv } from "../errors/RequiredInDotEnv.ts";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT);
const DATABASE_URL = process.env.DATABASE_URL;
const NVIDIA_NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;

if (!NVIDIA_NIM_API_KEY) {
  throw new RequiredInDotEnv("NVIDIA_NIM_API_KEY");
}

if (!DATABASE_URL) {
  throw new RequiredInDotEnv("DATABASE_URL");
}

if (isNaN(PORT)) {
  throw new InvalidType({ name: "PORT", type: "number" });
}

export const env = {
  PORT,
  DATABASE_URL,
  NVIDIA_NIM_API_KEY,
};
