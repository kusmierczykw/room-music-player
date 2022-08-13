import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { MenuItem } from '@shared/menu/models/menu-item';
import { RouterPath } from '@routing/enums/router-path';
import { Observable, of } from 'rxjs';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';

@Injectable({
  providedIn: 'root',
})
export class SidebarMenuProviderService implements MenuProvider {
  constructor(
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
  ) {}

  source$(): Observable<MenuItem[]> {
    return of([
      this.builder
        .initRouterLink(() =>
          this.routerLinkProvider.routerLink(RouterPath.ROOT),
        )
        .visible(of(true))
        .label('Home')
        .build(),

      this.builder
        .initRouterLink(() =>
          this.routerLinkProvider.routerLink(RouterPath.USERS),
        )
        .visible(of(false))
        .label('Użytkownicy')
        .build(),

      this.builder
        .initRouterLink(() =>
          this.routerLinkProvider.routerLink(RouterPath.ROOM_CREATE),
        )
        .visible(of(false))
        .label('Utwórz pokój')
        .build(),
    ]);
  }
}
