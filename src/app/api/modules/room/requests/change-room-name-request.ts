import { Uuid } from '@core/uuid/types/uuid';

export class ChangeRoomNameRequest {
  constructor(public readonly id: Uuid, public readonly name: string) {}
}
