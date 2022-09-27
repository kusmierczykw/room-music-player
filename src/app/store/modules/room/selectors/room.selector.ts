import { createFeatureSelector } from '@ngrx/store';
import { StoreFeature } from '@store/enums/store-feature';
import { RoomState } from '@store/modules/room/states/room-state';
import { roomAdapter } from '@store/modules/room/adapters/room.adapter';

export const selectRoomFeature = createFeatureSelector<RoomState>(
  StoreFeature.ROOM,
);

export const { selectAll } = roomAdapter.getSelectors(selectRoomFeature);
export const selectAllRooms = selectAll;
