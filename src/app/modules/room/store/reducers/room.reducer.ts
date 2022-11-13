import { createReducer, on } from '@ngrx/store';
import * as RoomActions from '../actions/room.action';
import { roomAdapter } from '../adapters/room.adapter';
import { roomInitialState } from '../states/room-state';

export const roomReducer = createReducer(
  roomInitialState,
  on(RoomActions.load, (state, action) =>
    roomAdapter.setAll(action.rooms, { ...state, loaded: true }),
  ),
  on(RoomActions.add, (state, action) =>
    roomAdapter.addOne(action.room, state),
  ),
  on(RoomActions.changeName, (state, action) => {
    const { id, name } = action;

    return roomAdapter.updateOne({ id, changes: { name } }, state);
  }),
);
