import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '@store/modules/room/models/room.model';
import { selectAllRooms } from '@store/modules/room/selectors/room.selector';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';

@Injectable({
  providedIn: 'root',
})
export class RoomsProviderService {
  constructor(
    @Inject(ROOM_API_TOKEN) private readonly roomsApi: RoomApi,
    private readonly store: Store,
  ) {}

  rooms$(): Observable<Room[]> {
    return this.fetchFromStore();
  }

  private fetchFromStore(): Observable<Room[]> {
    return this.store.select(selectAllRooms);
  }
}
