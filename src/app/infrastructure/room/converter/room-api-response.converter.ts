import { Injectable } from '@angular/core';
import { RoomResponse } from '@infrastructure/room/api/response/room.response';
import { Room } from '@domain/room/room';

@Injectable({
  providedIn: 'root',
})
export class RoomApiResponseConverter {
  toDomain(response: RoomResponse): Room {
    return Room.fromProperties({
      id: response.id,
      name: response.name,
    });
  }
}
