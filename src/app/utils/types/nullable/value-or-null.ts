import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';

export const valueOrNull = <T>(value: Nullable<T>): T | null => {
  if (isNullable(value)) {
    return null;
  }

  return value;
};
