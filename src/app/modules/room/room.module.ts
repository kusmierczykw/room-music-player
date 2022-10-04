import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from '@modules/room/room-routing.module';
import { RoomStoreModule } from '@store/modules/room/room-store.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RoomRoutingModule, RoomStoreModule],
})
export class RoomModule {}
