import { Nil } from '@utils/types/nil/nil';
import { isNil } from '@utils/types/nil/is-nil';

export const valueOrUndefined = <T>(value: Nil<T>): T | undefined => {
  if (isNil(value)) {
    return undefined;
  }

  return value;
};
