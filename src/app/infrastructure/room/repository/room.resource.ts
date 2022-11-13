import { RoomRepository } from '@domain/room/repository/room.repository';
import { map, Observable } from 'rxjs';
import { RoomId } from '@domain/room/type/room-id';
import { Room } from '@domain/room/room';
import { Injectable } from '@angular/core';
import { RoomApi } from '@infrastructure/room/api/room-api';
import { CreateRoom } from '@domain/room/type/create-room';
import { CreateRoomRequest } from '@infrastructure/room/api/request/create-room.request';
import { FetchByIdRequest } from '@infrastructure/core/api/request/fetch-by-id.request';
import { RoomApiResponseConverter } from '@infrastructure/room/converter/room-api-response.converter';

@Injectable()
export class RoomResource implements RoomRepository {
  constructor(
    private readonly api: RoomApi,
    private readonly roomApiResponseConverter: RoomApiResponseConverter,
  ) {}

  create(room: CreateRoom): Observable<RoomId> {
    const { name } = room;
    const request = new CreateRoomRequest(name);

    return this.api.create(request).pipe(map(({ id }) => id));
  }

  fetchById(id: RoomId): Observable<Room> {
    const request = new FetchByIdRequest(id);

    return this.api
      .fetchById(request)
      .pipe(map(this.roomApiResponseConverter.toDomain));
  }

  fetchRooms(): Observable<Room[]> {
    return this.api
      .fetchCollection()
      .pipe(
        map((collection) =>
          collection.items.map(this.roomApiResponseConverter.toDomain),
        ),
      );
  }
}
