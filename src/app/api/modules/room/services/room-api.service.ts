import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CollectionResponse } from '@api/common/collection-response';
import { RoomCollectionItemResponse } from '@api/modules/room/responses/room-collection-item-response';
import { UnimplementedMethodException } from '@core/exceptions/unimplemented-method-exception';
import { Observable } from 'rxjs';
import { Uuid } from '@core/uuid/types/uuid';
import { RoomDetailsResponse } from '@api/modules/room/responses/room-details.response';

@Injectable()
export class RoomApiService implements RoomApi {
  fetchCollection(): Observable<
    CollectionResponse<RoomCollectionItemResponse>
  > {
    throw new UnimplementedMethodException();
  }

  fetchDetails(id: Uuid): Observable<RoomDetailsResponse> {
    throw new UnimplementedMethodException();
  }
}
