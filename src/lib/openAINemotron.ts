import OpenAI from "openai";

export class OpenAINemotron {
  private readonly openai: OpenAI;
  private readonly apiKey: string;

  public readonly url = "https://integrate.api.nvidia.com/v1";
  public readonly model = "nvidia/llama-3.1-nemotron-70b-instruct";

  topP = 1;
  maxTokens = 1024;
  temperature = 0.5;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.openai = new OpenAI({
      apiKey: this.apiKey,
      baseURL: this.url,
    });
  }

  sendMessage = async (content: string) => {
    const completion = await this.openai.chat.completions.create({
      model: this.model,
      messages: [{ role: "user", content }],
      temperature: this.temperature,
      top_p: this.topP,
      max_tokens: this.maxTokens,
      stream: true,
    });

    for await (const chunk of completion) {
      process.stdout.write(chunk.choices[0]?.delta?.content ?? "");
    }
  };
}
