import { Room } from '@domain/room/room';
import { RoomId } from '@domain/room/type/room-id';

export class RoomListItemView {
  private constructor(readonly id: RoomId, readonly name: string) {}

  static fromDomain(room: Room) {
    return new RoomListItemView(room.id, room.name);
  }
}
