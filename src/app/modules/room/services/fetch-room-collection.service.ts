import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Room } from '@modules/room/models/room';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';

@Injectable({
  providedIn: 'root',
})
export class FetchRoomCollectionService {
  constructor(@Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi) {}

  fetch(): Observable<Room[]> {
    return this.roomApi.fetchCollection().pipe(
      map((response) => {
        const { items } = response;

        return items.map((response) => {
          const { id, name } = response;

          return new Room(id, name);
        });
      }),
    );
  }
}
