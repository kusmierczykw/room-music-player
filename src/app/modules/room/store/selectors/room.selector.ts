import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreFeature } from '@store/enums/store-feature';
import { RoomState } from '@modules/room/store/states/room-state';
import { roomAdapter } from '@modules/room/store/adapters/room.adapter';
import { Uuid } from '@core/uuid/types/uuid';

export const selectRoomStore = createFeatureSelector<RoomState>(
  StoreFeature.ROOM,
);

const { selectAll, selectEntities } = roomAdapter.getSelectors(selectRoomStore);

export const selectAllRooms = selectAll;
export const selectRoom = (id: Uuid) =>
  createSelector(selectEntities, (enteties) => enteties[id]);
export const selectRoomsLoaded = createSelector(
  selectRoomStore,
  ({ loaded }) => loaded,
);
