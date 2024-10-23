import { env } from "./config/env.ts";

import { PromptGenerator } from "./lib/promptGenerator.ts";
import { OpenAINemotron } from "./lib/openAINemotron.ts";
import { Webservice } from "./lib/webservice.ts";

async function main() {
  const api = new Webservice();

  api.createPostEndpoint("/", async (req, res) => {
    const { project } = req.body;
    const input = PromptGenerator.generate(project);

    const nemotron = new OpenAINemotron(env.NVIDIA_NIM_API_KEY);
    const output = await nemotron.sendMessage(input);

    res.send(output);
  });
}

main();
