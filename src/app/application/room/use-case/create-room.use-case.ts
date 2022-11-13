import { Injectable } from '@angular/core';
import { RoomRepository } from '@domain/room/repository/room.repository';
import { Observable } from 'rxjs';
import { RoomId } from '@domain/room/type/room-id';
import { CreateRoom } from '@domain/room/type/create-room';

@Injectable({
  providedIn: 'root',
})
export class CreateRoomUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  execute(room: CreateRoom): Observable<RoomId> {
    return this.roomRepository.create(room);
  }
}
