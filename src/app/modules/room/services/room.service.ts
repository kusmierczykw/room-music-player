import { Inject, Injectable } from '@angular/core';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { Store } from '@ngrx/store';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { map, Observable, tap } from 'rxjs';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { Room } from '@modules/room/store/models/room.model';
import { add, changeName } from '@modules/room/store/actions/room.action';
import { ChangeRoomNameRequest } from '@api/modules/room/requests/change-room-name-request';
import { Uuid } from '@core/uuid/types/uuid';

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
      map(this.createResponseToRoom()),
      tap((room) => this.store.dispatch(add({ room }))),
    );
  }

  public changeName(id: Uuid, name: string): Observable<void> {
    const request = new ChangeRoomNameRequest(id, name);

    return this.roomApi
      .changeName(request)
      .pipe(tap(() => this.store.dispatch(changeName({ id, name }))));
  }

  private createResponseToRoom(): (response: CreateRoomResponse) => Room {
    return ({ id, name }): Room => ({ id, name });
  }
}
