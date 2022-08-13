import { MonoTypeOperatorFunction, shareReplay } from 'rxjs';

export const shareReplayOnce = <T>(): MonoTypeOperatorFunction<T> =>
  shareReplay(1);
