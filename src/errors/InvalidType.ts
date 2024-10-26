export class InvalidType extends Error {
  constructor({ name, type }: { name: string; type: string }) {
    super(`The variable ${name} must be a ${type}.`);
    this.name = "InvalidType";
  }
}
