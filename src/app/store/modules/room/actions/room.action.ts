import { createAction, props } from '@ngrx/store';

import { Room } from '../models/room.model';

export const loadRooms = createAction(
  '[Room/API] Load Rooms',
  props<{ rooms: Room[] }>(),
);
export const addRoom = createAction(
  '[Room/API] Add room',
  props<{ room: Room }>(),
);
