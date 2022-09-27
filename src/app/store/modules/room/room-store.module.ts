import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { roomReducer } from './reducers/room.reducer';
import { StoreFeature } from '../../enums/store-feature';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeature.ROOM, roomReducer),
  ],
})
export class RoomStoreModule {}
