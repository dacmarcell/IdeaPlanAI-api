import { env } from "./config/env.ts";

import { Webservice } from "./webservice/webservice.ts";
import { PostController } from "./webservice/controllers/post.ts";

main();
async function main() {
  const webservice = new Webservice({ port: env.PORT });
  const postController = new PostController();

  const instance = webservice.getInstance();

  instance.post("/", async (req, res) => {
    await postController.sendMessagesToNemotron(req, res);
  });

  instance.post("/get-audio-in-text", async (req, res) => {});
}
