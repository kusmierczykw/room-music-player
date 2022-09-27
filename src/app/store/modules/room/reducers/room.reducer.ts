import { createReducer, on } from '@ngrx/store';
import * as RoomActions from '../actions/room.action';
import { roomAdapter } from '../adapters/room.adapter';
import { roomInitialState } from '../states/room-state';

export const roomReducer = createReducer(
  roomInitialState,
  on(RoomActions.loadRooms, (state, action) =>
    roomAdapter.setAll(action.rooms, state),
  ),
);
