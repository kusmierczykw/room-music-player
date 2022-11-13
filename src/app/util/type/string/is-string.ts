export const isString = <T>(predictable: T | string): predictable is string =>
  typeof predictable === 'string';
