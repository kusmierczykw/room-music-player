import { Observable } from 'rxjs';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { FetchByIdRequest } from '@api/modules/common/requests/fetch-by-id-request';
import { RoomResponse } from '@api/modules/room/responses/room-response';
import { CollectionResponse } from '@api/modules/common/responses/collection-response';
import { ChangeRoomNameRequest } from '@api/modules/room/requests/change-room-name-request';

export interface RoomApi {
  create(request: CreateRoomRequest): Observable<CreateRoomResponse>;

  changeName(request: ChangeRoomNameRequest): Observable<void>;

  fetchById(request: FetchByIdRequest): Observable<RoomResponse>;

  fetchCollection(): Observable<CollectionResponse<RoomResponse>>;
}
