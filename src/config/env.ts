import { RequiredInDotEnv } from "../errors/RequiredInDotEnv.ts";
import dotenv from "dotenv";

dotenv.config();

const NVIDIA_NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;

if (!process.env.NVIDIA_NIM_API_KEY) {
  throw new RequiredInDotEnv("NVIDIA_NIM_API_KEY");
}

export const env = { NVIDIA_NIM_API_KEY };
