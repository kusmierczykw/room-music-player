import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { MenuItem } from '@shared/menu/models/menu-item';
import { RouterPath } from '@routing/enums/router-path';
import { Observable, of } from 'rxjs';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterLinkNavigateService } from '@routing/services/router-link-navigate.service';
import { MenuItemCommand } from '@shared/menu/types/menu-item-command';
import { Uuid } from '@core/uuid/types/uuid';
import { CreateRoomActionService } from '@scaffolds/services/create-room-action.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarMenuProviderService implements MenuProvider {
  constructor(
    private readonly createRoomAction: CreateRoomActionService,
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
    private readonly routerLinkNavigate: RouterLinkNavigateService,
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
        .initCommand(() => this.createRoomCommand())
        .visible(of(true))
        .label('Utwórz pokój')
        .build(),
    ]);
  }

  private createRoomCommand(): MenuItemCommand {
    return () => {
      this.createRoomAction.create().subscribe({
        next: ({ id }) => this.navigateToRoomUpdate(id),
      });
    };
  }

  private navigateToRoomUpdate(roomId: Uuid): void {
    this.routerLinkNavigate.navigate(RouterPath.ROOM_UPDATE, {
      [RouterPathParam.ROOM_ID]: roomId,
    });
  }
}
