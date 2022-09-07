import { Uuid } from '@core/uuid/types/uuid';

export class FetchByIdRequest {
  constructor(public readonly id: Uuid) {}
}
