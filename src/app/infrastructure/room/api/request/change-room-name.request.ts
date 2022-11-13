import { RoomId } from '@domain/room/type/room-id';

export class ChangeRoomNameRequest {
  constructor(readonly id: RoomId, readonly name: string) {}
}
