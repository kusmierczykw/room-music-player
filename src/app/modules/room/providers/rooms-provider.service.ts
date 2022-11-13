import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '@modules/room/store/models/room.model';
import {
  selectAllRooms,
  selectRoom,
} from '@modules/room/store/selectors/room.selector';
import { Uuid } from '@core/uuid/types/uuid';
import { Nullable } from '@utils/types/nullable/nullable';

@Injectable({
  providedIn: 'root',
})
export class RoomsProviderService {
  constructor(private readonly store: Store) {}

  rooms$(): Observable<Room[]> {
    return this.fetchRoomsFromStore();
  }

  room$(id: Uuid): Observable<Nullable<Room>> {
    return this.fetchRoomByIdFromStore(id);
  }

  private fetchRoomByIdFromStore(id: Uuid): Observable<Nullable<Room>> {
    return this.store.select(selectRoom(id));
  }

  private fetchRoomsFromStore(): Observable<Room[]> {
    return this.store.select(selectAllRooms);
  }
}
