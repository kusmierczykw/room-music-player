import { Injectable } from '@angular/core';
import { RoomApi } from '../interfaces/room-api';
import { CreateRoomRequest } from '@api/modules/room/requests/create-room-request';
import { Observable, of, throwError } from 'rxjs';
import { CreateRoomResponse } from '@api/modules/room/responses/create-room-response';
import { FetchByIdRequest } from '@api/modules/common/requests/fetch-by-id-request';
import { RoomResponse } from '@api/modules/room/responses/room-response';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Uuid } from '@core/uuid/types/uuid';
import { CollectionResponse } from '@api/modules/common/responses/collection-response';
import { CollectionMetaResponse } from '@api/modules/common/responses/collection-meta-response';
import { ChangeRoomNameRequest } from '@api/modules/room/requests/change-room-name-request';
import { isNullable } from '@utils/types/nullable/is-nullable';

@Injectable()
export class RoomFakeApiService implements RoomApi {
  private lastRoomNumber = 1;

  private rooms = [
    {
      id: 'f8deca0f-fd78-4451-937d-d63ad171a5e8',
      name: 'Ten lepszy pokój',
    },
    {
      id: '432383fd-f506-4dc0-98f4-ed0fa69da06c',
      name: 'Pokój u Darka',
    },
  ];

  create(request: CreateRoomRequest): Observable<CreateRoomResponse> {
    const lastRoomNumber = this.lastRoomNumber++;

    const room = {
      id: `0e87587d-80be-4f1d-8ecf-5d599ef8ba90-${lastRoomNumber}`,
      name: `Nowy pokój #${lastRoomNumber}`,
    };

    this.rooms.push(room);

    const { id, name } = room;

    return of(new CreateRoomResponse(id, name));
  }

  fetchById(request: FetchByIdRequest): Observable<RoomResponse> {
    const { id } = request;
    const room = this.findById(id);

    if (isNullable(room)) {
      return throwError(
        () => new HttpErrorResponse({ status: HttpStatusCode.NotFound }),
      );
    }

    const { name } = room;

    return of(new RoomResponse(id, name));
  }

  fetchCollection(): Observable<CollectionResponse<RoomResponse>> {
    const rooms = this.rooms.map(({ id, name }) => new RoomResponse(id, name));
    const total = this.rooms.length;

    return of(new CollectionResponse(rooms, new CollectionMetaResponse(total)));
  }

  changeName(request: ChangeRoomNameRequest): Observable<void> {
    const { id, name } = request;
    const room = this.findById(id);

    if (isNullable(room)) {
      return throwError(
        () => new HttpErrorResponse({ status: HttpStatusCode.NotFound }),
      );
    }

    room.name = name;

    return of(void 0);
  }

  private findById = (id: Uuid) =>
    this.rooms.find(({ id: currentId }) => currentId === id);
}
