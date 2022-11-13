import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { Observable } from 'rxjs';
import { UnimplementedMethodException } from '@core/exceptions/unimplemented-method-exception';
import { FetchByIdRequest } from '@api/modules/common/requests/fetch-by-id-request';
import { RoomResponse } from '@api/modules/room/responses/room-response';
import { CollectionResponse } from '@api/modules/common/responses/collection-response';
import { HttpClient } from '@angular/common/http';
import { ChangeRoomNameRequest } from '@api/modules/room/requests/change-room-name-request';

@Injectable()
export class RoomApiService implements RoomApi {
  constructor(private readonly http: HttpClient) {}

  create(request: CreateRoomRequest): Observable<CreateRoomResponse> {
    throw new UnimplementedMethodException();
  }

  fetchById(request: FetchByIdRequest): Observable<RoomResponse> {
    throw new UnimplementedMethodException();
  }

  fetchCollection(): Observable<CollectionResponse<RoomResponse>> {
    throw new UnimplementedMethodException();
  }

  changeName(request: ChangeRoomNameRequest): Observable<void> {
    throw new UnimplementedMethodException();
  }
}
