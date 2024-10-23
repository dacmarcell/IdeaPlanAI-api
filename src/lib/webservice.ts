import express from "express";
import cors from "cors";

export class Webservice {
  express: express.Express;
  host: string;
  port: number;

  constructor(params?: { host: string; port: number }) {
    this.host = params?.host ?? "localhost";
    this.port = params?.port ?? 3000;
    this.express = express();

    this.start();
  }

  private start() {
    this.express.use(express.json());
    this.express.use(cors());

    this.express.listen(this.port, () => {
      console.info(`Server started at http://${this.host}:${this.port}`);
    });
  }

  getInstance() {
    return this.express;
  }

  createPostEndpoint(endpoint: string, callback: (req: any, res: any) => void) {
    this.express.post(endpoint, callback);
  }
}
