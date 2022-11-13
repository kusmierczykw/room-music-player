import { Injectable } from '@angular/core';
import { RoomRepository } from '@domain/room/repository/room.repository';
import { map, Observable } from 'rxjs';
import { RoomListItemView } from '@application/room/view/room-list-item-view';

@Injectable({
  providedIn: 'root',
})
export class FetchRoomListUseCase {
  constructor(private readonly roomRepository: RoomRepository) {}

  execute(): Observable<RoomListItemView[]> {
    return this.roomRepository
      .fetchRooms()
      .pipe(
        map((rooms) => rooms.map((room) => RoomListItemView.fromDomain(room))),
      );
  }
}
