import { Inject, Injectable } from '@angular/core';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { map, Observable } from 'rxjs';
import { Room } from '../../room/models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomListProviderService {
  constructor(@Inject(ROOM_API_TOKEN) readonly roomApi: RoomApi) {}

  roomList(): Observable<Room[]> {
    return this.roomApi.fetchCollection().pipe(
      map((collection) => {
        const { items } = collection;

        return items.map(({ id, name }) => new Room(id, name));
      }),
    );
  }
}
