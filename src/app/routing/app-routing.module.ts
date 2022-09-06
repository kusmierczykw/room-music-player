import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';
import { MainScaffoldComponent } from '@scaffolds/components/main-scaffold/main-scaffold.component';
import { RouterPathParam } from '@routing/enums/router-path-param';

const routes: Routes = [
  {
    path: RouterPathFragment.EMPTY,
    component: MainScaffoldComponent,
    title: 'Strona główna',
    children: [
      {
        path: RouterPathFragment.ROOMS,
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
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
