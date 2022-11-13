import { Observable } from 'rxjs';
import { CreateRoomRequest } from '@infrastructure/room/api/request/create-room.request';
import { CreateRoomResponse } from '@infrastructure/room/api/response/create-room.response';
import { RoomResponse } from '@infrastructure/room/api/response/room.response';
import { FetchByIdRequest } from '@infrastructure/core/api/request/fetch-by-id.request';
import { CollectionResponse } from '@infrastructure/core/api/response/collection.response';
import { Injectable } from '@angular/core';
import { RoomId } from '@domain/room/type/room-id';

@Injectable()
export abstract class RoomApi {
  abstract create(request: CreateRoomRequest): Observable<CreateRoomResponse>;
  abstract fetchById(
    request: FetchByIdRequest<RoomId>,
  ): Observable<RoomResponse>;
  abstract fetchCollection(): Observable<CollectionResponse<RoomResponse>>;
}
