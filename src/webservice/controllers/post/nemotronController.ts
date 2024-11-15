import * as express from "express";

import { env } from "../../../config/env.ts";
import { PromptGenerator } from "../../../prompt/promptGenerator.ts";
import { OpenAINemotron } from "../../../nemotron/openAINemotron.ts";

export class NemotronController {
  async sendMessagesToNemotron(req: express.Request, res: express.Response) {
    const { text } = req.body;

    const formattedText = this.formatText({ text });
    const planPrompt = PromptGenerator.generatePlan({ text: formattedText });

    const nemotron = new OpenAINemotron({ apiKey: env.NVIDIA_NIM_API_KEY });
    const plan = await nemotron.sendMessage(planPrompt);

    res.send({ plan });
  }

  formatText = ({ text }: { text: string }) => text.trim();
}
