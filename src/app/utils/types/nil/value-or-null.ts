import { Nil } from '@utils/types/nil/nil';
import { isNil } from '@utils/types/nil/is-nil';

export const valueOrNull = <T>(value: Nil<T>): T | null => {
  if (isNil(value)) {
    return null;
  }

  return value;
};
