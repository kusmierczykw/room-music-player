import { createAction, props } from '@ngrx/store';

import { Room } from '../models/room.model';
import { Uuid } from '@core/uuid/types/uuid';

export const load = createAction(
  '[Room/API] Load Rooms',
  props<{ rooms: Room[] }>(),
);
export const add = createAction('[Room/API] Add room', props<{ room: Room }>());
export const changeName = createAction(
  '[Room/API] Update room',
  props<{ id: Uuid; name: string }>(),
);
