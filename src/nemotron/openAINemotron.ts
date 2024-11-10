import OpenAI from "openai";

export class OpenAINemotron {
  private readonly openai: OpenAI;
  private readonly apiKey: string;

  readonly url = "https://integrate.api.nvidia.com/v1";
  readonly model = "nvidia/llama-3.1-nemotron-70b-instruct";

  readonly topP = 1;
  readonly maxTokens = 1024;
  readonly temperature = 0.5;

  constructor({ apiKey }: { apiKey: string }) {
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

    const output: string[] = [];

    for await (const chunk of completion) {
      output.push(chunk.choices[0]?.delta?.content ?? "");
    }

    const formattedOutput = output.join("");
    return formattedOutput;
  };

  //TODO: move this to a separate class
  transcribeAudio = async (content: File) => {
    const completion = await this.openai.audio.transcriptions.create({
      file: content,
      model: "whisper-1",
      language: "pt-BR",
      temperature: this.temperature,
    });

    return completion.text;
  };
}
