import { env } from "./config/env.ts";

import { PromptGenerator } from "./lib/promptGenerator.ts";
import { OpenAINemotron } from "./lib/openAiNemotron.ts";

async function main() {
  const content = PromptGenerator.generate(
    "Desenvolver um aplicativo de gerenciamento de tarefas para equipes de desenvolvimento de software."
  );

  const nemotron = new OpenAINemotron(env.NVIDIA_NIM_API_KEY);
  await nemotron.sendMessage(content);
}

main();
