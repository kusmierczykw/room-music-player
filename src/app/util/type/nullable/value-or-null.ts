import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';

export const valueOrNull = <T>(value: Nullable<T>): T | null => {
  if (isNullable(value)) {
    return null;
  }

  return value;
};
