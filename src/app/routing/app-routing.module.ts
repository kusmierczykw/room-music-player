import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';
import { MainComponent } from '@scaffolds/skeletons/main/main.component';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterPathData } from '@routing/enums/router-path-data';
import { RoomDetailsResolver } from '@modules/room/resolvers/room-details.resolver';

const routes: Routes = [
  {
    path: RouterPathFragment.EMPTY,
    component: MainComponent,
    children: [
      {
        path: RouterPathFragment.ROOMS,
        children: [
          {
            path: RouterPathFragment.NOT_FOUND,
            children: [
              {
                path: RouterPathFragment.EMPTY,
                loadComponent: () =>
                  import(
                    '@modules/room/pages/room-not-found-page/room-not-found-page.component'
                  ).then((c) => c.RoomNotFoundPageComponent),
              },
            ],
          },
          {
            path: RouterPathFragment.CREATE,
            loadComponent: () =>
              import(
                '@modules/room/pages/room-create-page/room-create-page.component'
              ).then((c) => c.RoomCreatePageComponent),
          },
          {
            path: `:${RouterPathParam.ROOM_ID}`,
            resolve: {
              [RouterPathData.DETAILS]: RoomDetailsResolver,
            },
            loadComponent: () =>
              import(
                '@modules/room/pages/room-details-page/room-details-page.component'
              ).then((c) => c.RoomDetailsPageComponent),
          },
          {
            path: RouterPathFragment.EMPTY,
            pathMatch: 'full',
            loadComponent: () =>
              import(
                '@modules/room/pages/room-list-page/room-list-page.component'
              ).then((c) => c.RoomListPageComponent),
          },
          {
            path: RouterPathFragment.WILDCARD,
            redirectTo: RouterPathFragment.NOT_FOUND,
          },
        ],
      },
      {
        path: RouterPathFragment.USERS,
        loadComponent: () =>
          import(
            '@modules/users/pages/user-list-page/user-list-page.component'
          ).then((c) => c.UserListPageComponent),
      },
      {
        path: RouterPathFragment.EMPTY,
        loadComponent: () =>
          import('@modules/home/pages/home-page/home-page.component').then(
            (c) => c.HomePageComponent,
          ),
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
