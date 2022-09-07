import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { Room } from '@modules/room/models/room';

@Injectable({
  providedIn: 'root',
})
export class CreateRoomActionService {
  constructor(@Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi) {}

  create(): Observable<Room> {
    return this.roomApi.create(new CreateRoomRequest()).pipe(
      map((response) => {
        const { id, name } = response;

        return new Room(id, name);
      }),
    );
  }
}
