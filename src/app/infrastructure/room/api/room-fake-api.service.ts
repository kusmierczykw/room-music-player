import { Injectable } from '@angular/core';
import { RoomApi } from './room-api';
import { CreateRoomRequest } from '@infrastructure/room/api/request/create-room.request';
import { Observable, of, throwError } from 'rxjs';
import { CreateRoomResponse } from '@infrastructure/room/api/response/create-room.response';
import { RoomResponse } from '@infrastructure/room/api/response/room.response';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { ChangeRoomNameRequest } from '@infrastructure/room/api/request/change-room-name.request';
import { isNullable } from '@util/type/nullable/is-nullable';
import { FetchByIdRequest } from '@infrastructure/core/api/request/fetch-by-id.request';
import { CollectionResponse } from '@infrastructure/core/api/response/collection.response';
import { CollectionMetaResponse } from '@infrastructure/core/api/response/collection-meta.response';
import { RoomId } from '@domain/room/type/room-id';

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

    const { id } = room;

    return of(new CreateRoomResponse(id));
  }

  fetchById(request: FetchByIdRequest<RoomId>): Observable<RoomResponse> {
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

  private findById = (id: RoomId) =>
    this.rooms.find(({ id: currentId }) => currentId === id);
}
