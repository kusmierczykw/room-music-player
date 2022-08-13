export const keyByValue = <Value, Enum>(value: Value, type: Enum): string =>
  Object.keys(type)[Object.values(type).indexOf(value)];
