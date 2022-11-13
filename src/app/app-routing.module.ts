import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layout/component/main-layout/main-layout.component';
import { RouterPathFragment } from '@core/routing/enum/router-path-fragment';

const routes: Routes = [
  {
    path: RouterPathFragment.EMPTY,
    component: MainLayoutComponent,
    title: 'Strona główna',
    children: [
      {
        path: RouterPathFragment.ROOMS,
        loadChildren: () =>
          import('@page/room/room-routing').then(
            ({ RoomRouting }) => RoomRouting,
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
