export const isNumber = <T>(predictable: T | number): predictable is number =>
  typeof predictable === 'number';
