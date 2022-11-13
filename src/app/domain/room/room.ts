import { RoomId } from '@domain/room/type/room-id';
import { RoomProperties } from '@domain/room/type/room-properties';

export class Room {
  private constructor(readonly id: RoomId, readonly name: string) {}

  static fromProperties(properties: RoomProperties): Room {
    return new Room(properties.id, properties.name);
  }

  properties(): RoomProperties {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
