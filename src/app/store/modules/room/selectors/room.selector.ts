import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreFeature } from '@store/enums/store-feature';
import { RoomState } from '@store/modules/room/states/room-state';
import { roomAdapter } from '@store/modules/room/adapters/room.adapter';

export const selectRoomStore = createFeatureSelector<RoomState>(
  StoreFeature.ROOM,
);

export const { selectAll } = roomAdapter.getSelectors(selectRoomStore);
export const selectAllRooms = selectAll;
export const selectRoomsLoaded = createSelector(
  selectRoomStore,
  ({ loaded }) => loaded,
);
