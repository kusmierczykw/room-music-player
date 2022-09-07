import { Inject, Injectable } from '@angular/core';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { Uuid } from '@core/uuid/types/uuid';
import { map, Observable } from 'rxjs';
import { Room } from '@modules/room/models/room';
import { FetchByIdRequest } from '@api/common/requests/fetch-by-id-request';

@Injectable({
  providedIn: 'root',
})
export class FetchRoomActionService {
  constructor(@Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi) {}

  fetchById(id: Uuid): Observable<Room> {
    const request = new FetchByIdRequest(id);

    return this.roomApi.fetchById(request).pipe(
      map((response) => {
        const { id, name } = response;

        return new Room(id, name);
      }),
    );
  }
}
