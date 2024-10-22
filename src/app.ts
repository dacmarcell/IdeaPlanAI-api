import OpenAI from "openai";

import { env } from "./config/env.ts";
import { data } from "./config/constants.ts";

import { PromptGenerator } from "./lib/promptGenerator.ts";

const openai = new OpenAI({
  apiKey: env.NVIDIA_NIM_API_KEY,
  baseURL: data.url,
});

export async function main() {
  const content = PromptGenerator.generate(
    "Desenvolver um aplicativo de gerenciamento de tarefas para equipes de desenvolvimento de software."
  );

  const completion = await openai.chat.completions.create({
    model: data.model,
    messages: [{ role: "user", content }],
    temperature: data.temperature,
    top_p: data.topP,
    max_tokens: data.maxTokens,
    stream: true,
  });

  for await (const chunk of completion) {
    process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
  }
}

main();
