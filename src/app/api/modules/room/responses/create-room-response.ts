import { Uuid } from '@core/uuid/types/uuid';

export class CreateRoomResponse {
  constructor(public readonly id: Uuid, public readonly name: string) {}
}
