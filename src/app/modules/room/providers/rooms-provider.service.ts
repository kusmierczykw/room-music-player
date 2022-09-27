import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Room } from '@store/modules/room/models/room.model';
import { selectAllRooms } from '@store/modules/room/selectors/room.selector';

@Injectable({
  providedIn: 'root',
})
export class RoomsProviderService {
  constructor(private readonly store: Store) {}

  rooms$(): Observable<Room[]> {
    return this.store.select(selectAllRooms);
  }
}
