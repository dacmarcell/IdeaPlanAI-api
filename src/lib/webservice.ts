import express from "express";

export class Webservice {
  express: express.Express;
  host: string;
  port: number;

  constructor(host?: string, port?: number) {
    this.host = host ?? "localhost";
    this.port = port ?? 3000;
    this.start();
  }

  private start() {
    this.express = express();
    this.express.use(express.json());

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
