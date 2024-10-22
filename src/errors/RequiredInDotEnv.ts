export class RequiredInDotEnv extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RequiredInEnvironment";
  }

  static throwIfMissing(key: string) {
    if (!process.env[key]) {
      throw new RequiredInDotEnv(
        `${key} is required to run this application. Please set it in the environment variables.`
      );
    }
  }
}
