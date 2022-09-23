import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';

const routes: Routes = [
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
              import(
                '@modules/room/pages/update-room-page/update-room-page.component'
              ).then((c) => c.UpdateRoomPageComponent),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
