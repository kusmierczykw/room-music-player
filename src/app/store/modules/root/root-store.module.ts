import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/root.reducer';
import { RoomStoreModule } from '@modules/room/store/room-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer),
    RoomStoreModule.forRoot(),
  ],
})
export class RootStoreModule {}
