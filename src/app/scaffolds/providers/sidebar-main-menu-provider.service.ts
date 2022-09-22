import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPath } from '@routing/enums/router-path';
import { Observable, of } from 'rxjs';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { MenuItemCommand } from '@shared/menu/types/menu-item-command';
import { Menu } from '@shared/menu/models/menu';

@Injectable({
  providedIn: 'root',
})
export class SidebarMainMenuProviderService implements MenuProvider {
  constructor(
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
  ) {}

  source$(): Observable<Menu> {
    return of(
      new Menu([
        this.builder
          .initRouterLink(() =>
            this.routerLinkProvider.routerLink(RouterPath.ROOT),
          )
          .visible(of(true))
          .label('Home')
          .build(),

        this.builder
          .initCommand(() => this.createRoomCommand())
          .visible(of(true))
          .label('Utwórz pokój')
          .build(),
      ]),
    );
  }

  private createRoomCommand(): MenuItemCommand {
    return () => {};
  }
}
