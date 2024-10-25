import pgPromise from "pg-promise";
import { env } from "../config/env";

const pgp = pgPromise({});

export const db = pgp({ connectionString: env.DATABASE_URL });
