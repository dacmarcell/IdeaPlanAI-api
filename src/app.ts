import { env } from "./config/env.ts";

import { PromptGenerator } from "./prompt/promptGenerator.ts";
import { OpenAINemotron } from "./nemotron/openAINemotron.ts";
import { Webservice } from "./webservice/webservice.ts";

async function main() {
  const api = new Webservice({ port: env.PORT });

  const generatePrompts = ({ text }: { text: string }) => {
    const categoryPrompt = PromptGenerator.generateCategory({ text });
    const planPrompt = PromptGenerator.generatePlan({ text });

    return { categoryPrompt, planPrompt };
  };

  const sendMessagesToNemotron = async ({
    apiKey,
    planPrompt,
    categoryPrompt,
  }: {
    apiKey: string;
    planPrompt: string;
    categoryPrompt: string;
  }) => {
    const nemotron = new OpenAINemotron({ apiKey });

    const category = await nemotron.sendMessage(categoryPrompt);
    const plan = await nemotron.sendMessage(planPrompt);

    return { category, plan };
  };

  const formatText = ({ text }: { text: string }) => text.trim();

  api.createPostEndpoint("/", async (req, res) => {
    const { text } = req.body;

    const formattedText = formatText({ text });

    const { categoryPrompt, planPrompt } = generatePrompts({
      text: formattedText,
    });

    const { category, plan } = await sendMessagesToNemotron({
      planPrompt,
      categoryPrompt,
      apiKey: env.NVIDIA_NIM_API_KEY,
    });

    res.send({ category, plan });
  });
}

main();
