export class RequiredInputParameterException extends Error {
  constructor(name: string) {
    super(`The @Input() parameter "${name}" must be passed.`);
  }
}
