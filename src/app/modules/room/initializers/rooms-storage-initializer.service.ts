import { Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { Store } from '@ngrx/store';
import { loadRooms } from '@store/modules/room/actions/room.action';
import { Room } from '@store/modules/room/models/room.model';
import { CollectionResponse } from '@api/common/responses/collection-response';
import { RoomResponse } from '@api/modules/room/responses/room-response';

@Injectable({
  providedIn: 'root',
})
export class RoomsStorageInitializerService {
  constructor(
    @Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi,
    private readonly store: Store,
  ) {}

  initialize(): Observable<Room[]> {
    return this.fetchCollectionFromApi().pipe(
      map(this.responseToRooms()),
      tap((rooms) => this.dispatchLoadRoomAction(rooms)),
    );
  }

  private responseToRooms(): (
    response: CollectionResponse<RoomResponse>,
  ) => Room[] {
    return ({ items }): Room[] =>
      items.map(({ id, name }) => ({ id, label: name }));
  }

  private fetchCollectionFromApi(): Observable<
    CollectionResponse<RoomResponse>
  > {
    return this.roomApi.fetchCollection();
  }

  private dispatchLoadRoomAction(rooms: Room[]): void {
    this.store.dispatch(loadRooms({ rooms }));
  }
}
