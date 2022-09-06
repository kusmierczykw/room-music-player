import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uuid } from '@core/uuid/types/uuid';
import { ROOM_API_TOKEN } from '@api/modules/room/tokens/room-api-token';
import { RoomApi } from '@api/modules/room/interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room.request';

@Injectable({
  providedIn: 'root',
})
export class CreateRoomActionService {
  constructor(@Inject(ROOM_API_TOKEN) private readonly roomApi: RoomApi) {}

  create(): Observable<{ id: Uuid }> {
    return this.roomApi.create(new CreateRoomRequest());
  }
}
