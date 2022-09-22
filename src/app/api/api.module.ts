import { NgModule } from '@angular/core';
import { ROOM_API_TOKEN } from './modules/room/tokens/room-api-token';
import { RoomFakeApiService } from './modules/room/services/room-fake-api.service';

@NgModule({
  providers: [
    {
      provide: ROOM_API_TOKEN,
      useClass: RoomFakeApiService,
    },
  ],
})
export class ApiModule {}
