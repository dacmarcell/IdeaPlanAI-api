import { env } from "./config/env";

import { PromptGenerator } from "./lib/promptGenerator";
import { OpenAINemotron } from "./lib/openAINemotron";
import { Webservice } from "./lib/webservice";

async function main() {
  const api = new Webservice({ port: env.PORT });

  api.createPostEndpoint("/", async (req, res) => {
    const { project } = req.body;
    const input = PromptGenerator.generate(project);

    const nemotron = new OpenAINemotron(env.NVIDIA_NIM_API_KEY);
    const output = await nemotron.sendMessage(input);

    res.send(output);
  });
}

main();
