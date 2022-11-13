import { Observable } from 'rxjs';
import { RoomId } from '@domain/room/type/room-id';
import { Room } from '@domain/room/room';
import { Injectable } from '@angular/core';
import { CreateRoom } from '@domain/room/type/create-room';

@Injectable()
export abstract class RoomRepository {
  abstract create(room: CreateRoom): Observable<RoomId>;

  abstract fetchById(id: RoomId): Observable<Room>;

  abstract fetchRooms(): Observable<Room[]>;
}
