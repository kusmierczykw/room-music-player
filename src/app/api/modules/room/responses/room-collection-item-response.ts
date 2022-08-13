import { Uuid } from '@core/uuid/types/uuid';

export class RoomCollectionItemResponse {
  public constructor(readonly id: Uuid, readonly name: string) {}
}
