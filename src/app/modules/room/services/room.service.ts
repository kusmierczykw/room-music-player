import { Inject, Injectable } from '@angular/core';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { Store } from '@ngrx/store';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { map, Observable, tap } from 'rxjs';
import { Room } from '@store/modules/room/models/room.model';
import { addRoom } from '@store/modules/room/actions/room.action';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public constructor(
    @Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi,
    private readonly store: Store,
  ) {}

  public create(): Observable<Room> {
    const request = new CreateRoomRequest();

    return this.roomApi.create(request).pipe(
      map(this.responseToRoom()),
      tap((room) => this.store.dispatch(addRoom({ room }))),
    );
  }

  private responseToRoom(): (response: CreateRoomResponse) => Room {
    return ({ id, name }): Room => ({
      id,
      label: name,
    });
  }
}
