import { MonoTypeOperatorFunction, take } from 'rxjs';

export const once = <T>(): MonoTypeOperatorFunction<T> => take(1);
