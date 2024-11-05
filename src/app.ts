import { env } from "./config/env.ts";

import { PromptGenerator } from "./prompt/promptGenerator.ts";
import { OpenAINemotron } from "./nemotron/openAINemotron.ts";
import { Webservice } from "./webservice/webservice.ts";

main();

async function main() {
  const api = new Webservice({ port: env.PORT });

  api.createPostEndpoint("/", async (req, res) => {
    const { text } = req.body;

    const formattedText = formatText({ text });

    const { planPrompt } = generatePrompts({
      text: formattedText,
    });

    const { plan } = await sendMessagesToNemotron({
      planPrompt,
      apiKey: env.NVIDIA_NIM_API_KEY,
    });

    res.send({ plan });
  });
}

const generatePrompts = ({ text }: { text: string }) => {
  const planPrompt = PromptGenerator.generatePlan({ text });

  return { planPrompt };
};

const sendMessagesToNemotron = async ({
  apiKey,
  planPrompt,
}: {
  apiKey: string;
  planPrompt: string;
}) => {
  const nemotron = new OpenAINemotron({ apiKey });

  const plan = await nemotron.sendMessage(planPrompt);

  return { plan };
};

const formatText = ({ text }: { text: string }) => text.trim();
