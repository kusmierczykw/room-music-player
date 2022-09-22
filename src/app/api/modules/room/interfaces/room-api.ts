import { Observable } from 'rxjs';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { FetchByIdRequest } from '@api/common/requests/fetch-by-id-request';
import { RoomResponse } from '@api/modules/room/responses/room-response';
import { CollectionResponse } from '@api/common/responses/collection-response';

export interface RoomApi {
  create(request: CreateRoomRequest): Observable<CreateRoomResponse>;

  fetchById(request: FetchByIdRequest): Observable<RoomResponse>;

  fetchCollection(): Observable<CollectionResponse<RoomResponse>>;
}
