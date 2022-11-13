import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';

export const valueOrUndefined = <T>(value: Nullable<T>): T | undefined => {
  if (isNullable(value)) {
    return undefined;
  }

  return value;
};
