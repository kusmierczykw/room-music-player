import { NgModule } from '@angular/core';
import { RoomApi } from '@infrastructure/room/api/room-api';
import { RoomFakeApiService } from '@infrastructure/room/api/room-fake-api.service';
import { RoomRepository } from '@domain/room/repository/room.repository';
import { RoomResource } from '@infrastructure/room/repository/room.resource';

@NgModule({
  providers: [
    {
      provide: RoomApi,
      useClass: RoomFakeApiService,
    },
    {
      provide: RoomRepository,
      useClass: RoomResource,
    },
  ],
})
export class InfrastructureModule {}
