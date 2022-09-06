import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room.request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room.response';
import { Observable } from 'rxjs';
import { UnimplementedMethodException } from '@core/exceptions/unimplemented-method-exception';

@Injectable()
export class RoomApiService implements RoomApi {
  create(request: CreateRoomRequest): Observable<CreateRoomResponse> {
    throw new UnimplementedMethodException();
  }
}
