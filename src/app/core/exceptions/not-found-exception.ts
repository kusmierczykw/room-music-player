export class NotFoundException extends Error {
  constructor(message = 'Not found.') {
    super(message);
  }
}
