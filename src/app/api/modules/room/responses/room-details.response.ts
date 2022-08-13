import { Uuid } from '@core/uuid/types/uuid';

export class RoomDetailsResponse {
  public constructor(readonly id: Uuid, readonly name: string) {}
}
