import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room.request';
import { Observable, of } from 'rxjs';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room.response';

@Injectable()
export class RoomFakeApiService implements RoomApi {
  create(request: CreateRoomRequest): Observable<CreateRoomResponse> {
    return of(
      new CreateRoomResponse(
        '0e87587d-80be-4f1d-8ecf-5d599ef8ba90',
        'Nowy pokój',
      ),
    );
  }
}
