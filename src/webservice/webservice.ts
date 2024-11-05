import express from "express";
import cors from "cors";
import cluster from "node:cluster";
import { cpus } from "node:os";

export class Webservice {
  express: express.Express;
  host: string;
  port: number;

  constructor(params?: Partial<{ host: string; port: number }>) {
    this.host = params?.host ?? "localhost";
    this.port = params?.port ?? 3000;
    this.express = express();
    this.start();
    this.createHealthChecker();
  }

  private start() {
    this.express = express();
    this.express.use(express.json());
    this.express.use(cors());
    this.clusterize();
  }

  private clusterize() {
    if (cluster.isPrimary) {
      const numWorkers = cpus().length;
      console.log(`Master cluster setting up ${numWorkers} workers...`);

      for (let i = 0; i < numWorkers; i++) {
        cluster.fork();
      }

      cluster.on("online", (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
      });

      cluster.on("exit", (worker, code, signal) => {
        console.log(
          `Worker ${worker.process.pid} died with code ${code} and signal ${signal}`
        );
        console.log("Starting a new worker");
        cluster.fork();
      });
    } else {
      const server = this.express.listen(this.port, () =>
        console.log(`Worker ${process.pid} listening at port ${this.port}`)
      );

      const events = ["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "SIGTERM"];

      events.forEach((e) => {
        process.on(e, async () => {
          server.close();
        });
      });
    }
  }

  private createHealthChecker() {
    this.express.get("/health", (_, res) => {
      res.send("OK");
    });
  }

  getInstance() {
    return this.express;
  }

  createPostEndpoint(endpoint: string, callback: (req: any, res: any) => void) {
    this.express.post(endpoint, callback);
  }
}
