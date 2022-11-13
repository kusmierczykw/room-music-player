import { RoomId } from '@domain/room/type/room-id';

export class CreateRoomResponse {
  constructor(readonly id: RoomId) {}
}
