import { env } from "./config/env.ts";

import { Webservice } from "./webservice/webservice.ts";
import { NemotronController } from "./webservice/controllers/post/nemotronController.ts";

main();
async function main() {
  const webservice = new Webservice({ port: env.PORT });
  const nemotronController = new NemotronController();

  const instance = webservice.getInstance();

  instance.post("/", async (req, res) => {
    await nemotronController.sendMessagesToNemotron(req, res);
  });

  instance.post("/get-audio-in-text", async (req, res) => {});
}
