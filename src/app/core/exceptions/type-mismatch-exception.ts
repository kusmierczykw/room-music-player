export class TypeMismatchException extends Error {
  constructor(message = 'Type mismatch.') {
    super(message);
  }
}
