import { Uuid } from '@core/uuid/types/uuid';

export class RoomResponse {
  constructor(public readonly id: Uuid, public readonly name: string) {}
}
