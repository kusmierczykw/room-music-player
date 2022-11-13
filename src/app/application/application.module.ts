import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomApplicationModule } from '@application/room/room-application.module';

@NgModule({
  imports: [CommonModule, RoomApplicationModule],
})
export class ApplicationModule {}
