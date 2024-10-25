import { RequiredInDotEnv } from "../errors/RequiredInDotEnv.ts";
import dotenv from "dotenv";

dotenv.config();

const NVIDIA_NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;
const PORT = process.env.PORT ?? 3000;
const DATABASE_URL = process.env.DATABASE_URL;

if (!NVIDIA_NIM_API_KEY) {
  throw new RequiredInDotEnv("NVIDIA_NIM_API_KEY");
}
if (!DATABASE_URL) {
  throw new RequiredInDotEnv("DATABASE_URL");
}
if (typeof PORT === "string" && isNaN(parseInt(PORT))) {
  throw new RequiredInDotEnv("PORT"); //FIXME: modificar erro
}

export const env = {
  DATABASE_URL,
  NVIDIA_NIM_API_KEY,
  PORT: PORT as number,
};
