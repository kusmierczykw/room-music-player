import { Routes } from '@angular/router';
import { RouterPathFragment } from '@core/routing/enum/router-path-fragment';
import { RouterPathParam } from '@core/routing/enum/router-path-param';

export const RoomRouting: Routes = [
  {
    path: '',
    children: [
      {
        path: `:${RouterPathParam.ROOM_ID}`,
        children: [
          {
            path: RouterPathFragment.UPDATE,
            title: 'Edycja pokoju',
            loadComponent: () =>
              import('./update-room-page/update-room-page.component').then(
                ({ UpdateRoomPageComponent }) => UpdateRoomPageComponent,
              ),
          },
        ],
      },
    ],
  },
];
