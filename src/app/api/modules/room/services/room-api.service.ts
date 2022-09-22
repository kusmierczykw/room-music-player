import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { Observable } from 'rxjs';
import { UnimplementedMethodException } from '@core/exceptions/unimplemented-method-exception';
import { FetchByIdRequest } from '@api/common/requests/fetch-by-id-request';
import { RoomResponse } from '@api/modules/room/responses/room-response';
import { CollectionResponse } from '@api/common/responses/collection-response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoomApiService implements RoomApi {
  constructor(private readonly httpClient: HttpClient) {}

  create(request: CreateRoomRequest): Observable<CreateRoomResponse> {
    throw new UnimplementedMethodException();
  }

  fetchById(request: FetchByIdRequest): Observable<RoomResponse> {
    throw new UnimplementedMethodException();
  }

  fetchCollection(): Observable<CollectionResponse<RoomResponse>> {
    throw new UnimplementedMethodException();
  }
}
