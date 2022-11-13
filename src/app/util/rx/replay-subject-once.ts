import { ReplaySubject, TimestampProvider } from 'rxjs';

export class ReplaySubjectOnce<T> extends ReplaySubject<T> {
  constructor(_windowTime?: number, _timestampProvider?: TimestampProvider) {
    super(1, _windowTime, _timestampProvider);
  }
}
