import { RequiredInDotEnv } from "../errors/RequiredInDotEnv";
import dotenv from "dotenv";

dotenv.config();

const NVIDIA_NIM_API_KEY = process.env.NVIDIA_NIM_API_KEY;
const PORT = parseInt(process.env.PORT);

if (!NVIDIA_NIM_API_KEY) {
  throw new RequiredInDotEnv("NVIDIA_NIM_API_KEY");
}
if (!PORT || isNaN(PORT)) {
  throw new RequiredInDotEnv("PORT");
}

export const env = { NVIDIA_NIM_API_KEY, PORT };
