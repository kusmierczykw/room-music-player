import { Inject, Injectable } from '@angular/core';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { Uuid } from '@core/uuid/types/uuid';
import { map, Observable } from 'rxjs';
import { Room } from '@modules/room/models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomDetailsProviderService {
  constructor(@Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi) {}

  room(id: Uuid): Observable<Room> {
    return this.roomApi
      .fetchDetails(id)
      .pipe(map(({ id, name }) => new Room(id, name)));
  }
}
