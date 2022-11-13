import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { roomReducer } from './reducers/room.reducer';
import { StoreFeature } from '@store/enums/store-feature';
import { RoomsStorageInitializerService } from '@modules/room/initializers/rooms-storage-initializer.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(StoreFeature.ROOM, roomReducer),
  ],
})
export class RoomStoreModule {
  static forRoot(): ModuleWithProviders<RoomStoreModule> {
    return {
      ngModule: RoomStoreModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: (initializer: RoomsStorageInitializerService) => () =>
            initializer.initialize(),
          deps: [RoomsStorageInitializerService],
        },
      ],
    };
  }
}
