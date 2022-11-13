import { Injectable } from '@angular/core';
import { RoomRepository } from '@domain/room/repository/room.repository';
import { Observable } from 'rxjs';
import { RoomId } from '@domain/room/type/room-id';
import { Room } from '@domain/room/room';

@Injectable({
  providedIn: 'root',
})
export class FetchRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  execute(roomId: RoomId): Observable<Room> {
    return this.roomRepository.fetchById(roomId);
  }
}
