import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';

export const valueOrUndefined = <T>(value: Nullable<T>): T | undefined => {
  if (isNullable(value)) {
    return undefined;
  }

  return value;
};
