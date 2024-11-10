import { Request, Response } from "express";
import { PromptGenerator } from "../../../prompt/promptGenerator";
import { env } from "../../../config/env";
import { OpenAINemotron } from "../../../nemotron/openAINemotron";

export class NemotronController {
  promptGenerator: PromptGenerator;

  constructor() {
    this.promptGenerator = new PromptGenerator();
  }

  async sendMessagesToNemotron(req: Request, res: Response) {
    const { text } = req.body;

    const formattedText = this.formatText({ text });

    const { planPrompt } = this.generatePrompts({
      text: formattedText,
    });

    const { plan } = await this.sendMessages({
      planPrompt,
      apiKey: env.NVIDIA_NIM_API_KEY,
    });

    res.send({ plan });
  }

  generatePrompts = ({ text }: { text: string }) => {
    const planPrompt = PromptGenerator.generatePlan({ text });

    return { planPrompt };
  };

  sendMessages = async ({
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

  formatText = ({ text }: { text: string }) => text.trim();
}
