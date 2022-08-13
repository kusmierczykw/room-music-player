import { RoomCollectionItemResponse } from '../responses/room-collection-item-response';
import { CollectionResponse } from '@api/common/collection-response';
import { Observable } from 'rxjs';
import { Uuid } from '@core/uuid/types/uuid';
import { RoomDetailsResponse } from '@api/modules/room/responses/room-details.response';

export interface RoomApi {
  fetchCollection(): Observable<CollectionResponse<RoomCollectionItemResponse>>;

  fetchDetails(id: Uuid): Observable<RoomDetailsResponse>;
}
