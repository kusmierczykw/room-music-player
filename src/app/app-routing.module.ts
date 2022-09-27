import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';
import { MainScaffoldComponent } from '@scaffolds/components/main-scaffold/main-scaffold.component';

const routes: Routes = [
  {
    path: RouterPathFragment.EMPTY,
    component: MainScaffoldComponent,
    title: 'Strona główna',
    children: [
      {
        path: RouterPathFragment.ROOMS,
        loadChildren: () =>
          import('@modules/room/room.module').then((m) => m.RoomModule),
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
