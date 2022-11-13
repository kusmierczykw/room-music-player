import { Room } from '@domain/room/room';
import { RoomId } from '@domain/room/type/room-id';

export class RoomResponse {
  constructor(readonly id: RoomId, readonly name: string) {}

  toDomain(): Room {
    return Room.fromProperties({
      id: this.id,
      name: this.name,
    });
  }
}
