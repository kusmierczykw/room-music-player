export class UnimplementedMethodException extends Error {
  public constructor(message = 'Unimplemented method.') {
    super(message);
  }
}
