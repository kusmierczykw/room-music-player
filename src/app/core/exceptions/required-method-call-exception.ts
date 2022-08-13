export class RequiredMethodCallException extends Error {
  constructor(name: string) {
    super(`The method ${name} must be call.`);
  }
}
