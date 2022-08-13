import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CollectionResponse } from '@api/common/collection-response';
import { RoomCollectionItemResponse } from '@api/modules/room/responses/room-collection-item-response';
import { CollectionMetaResponse } from '@api/common/collection-meta-response';
import { Observable, of, throwError } from 'rxjs';
import { Uuid } from '@core/uuid/types/uuid';
import { RoomDetailsResponse } from '@api/modules/room/responses/room-details.response';
import { isNil } from '@utils/types/nil';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable()
export class RoomFakeApiService implements RoomApi {
  private items = [
    {
      id: 'c78d73f4-eb07-41cf-bbb0-e6774083386d',
      name: 'Ten lepszy pokój',
    },
    {
      id: '1277ed18-c8d8-4f72-8cd7-26d073cd6213',
      name: 'Ten gorszy pokój',
    },
    {
      id: 'c245fa1f-6df1-47c4-b79d-ed8a68a987dd',
      name: 'U Darka',
    },
  ];

  fetchCollection(): Observable<
    CollectionResponse<RoomCollectionItemResponse>
  > {
    const items = this.items.map(
      ({ id, name }) => new RoomCollectionItemResponse(id, name),
    );
    const meta = new CollectionMetaResponse(1, 10, this.items.length);

    return of(new CollectionResponse<RoomCollectionItemResponse>(items, meta));
  }

  fetchDetails(id: Uuid): Observable<RoomDetailsResponse> {
    const item = this.items.find(
      ({ id: predictableId }) => predictableId === id,
    );

    if (isNil(item)) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: HttpStatusCode.NotFound,
            statusText: 'Item not found.',
          }),
      );
    }

    const { name } = item;

    return of(new RoomDetailsResponse(id, name));
  }
}
