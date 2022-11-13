import { RoomId } from '@domain/room/type/room-id';

export class RoomResponse {
  constructor(readonly id: RoomId, readonly name: string) {}
}
