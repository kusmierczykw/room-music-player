import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Room } from '@domain/room/room';
import { CreateRoomUseCase } from '@application/room/use-case/create-room.use-case';
import { FetchRoomUseCase } from '@application/room/use-case/fetch-room.use-case';
import { FetchRoomListUseCase } from '@application/room/use-case/fetch-room-list.use-case';
import { RoomListItemView } from '@application/room/view/room-list-item-view';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(
    private readonly createRoomUseCase: CreateRoomUseCase,
    private readonly fetchRoomUseCase: FetchRoomUseCase,
    private readonly fetchRoomListUseCase: FetchRoomListUseCase,
  ) {}

  create(name: string): Observable<Room> {
    return this.createRoomUseCase
      .execute({ name })
      .pipe(switchMap((roomId) => this.fetchRoomUseCase.execute(roomId)));
  }

  fetchList(): Observable<RoomListItemView[]> {
    return this.fetchRoomListUseCase.execute();
  }
}
