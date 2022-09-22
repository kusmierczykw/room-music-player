import { Nil } from '@utils/types/nil/nil';

export const isNil = <T>(
  predictable: Nil<T>,
): predictable is null | undefined =>
  predictable === null || predictable === undefined;
