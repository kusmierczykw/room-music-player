import { Observable } from 'rxjs';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room.request';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room.response';

export interface RoomApi {
  create(request: CreateRoomRequest): Observable<CreateRoomResponse>;
}
