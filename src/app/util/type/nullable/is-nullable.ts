import { Nullable } from '@util/type/nullable/nullable';

export const isNullable = <T>(
  predictable: Nullable<T>,
): predictable is null | undefined =>
  predictable === null || predictable === undefined;
