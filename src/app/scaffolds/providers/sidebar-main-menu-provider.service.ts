import { Injectable } from '@angular/core';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPath } from '@routing/enums/router-path';
import { Observable, of } from 'rxjs';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { MenuItemCommand } from '@shared/menu/types/menu-item-command';
import { Menu } from '@shared/menu/models/menu';
import { RoomService } from '@modules/room/services/room.service';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterLinkNavigateService } from '@routing/services/router-link-navigate.service';
import { Icon } from '@core/assets/icons/enums/icon';
import { Room } from '@modules/room/store/models/room.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarMainMenuProviderService implements MenuProvider {
  constructor(
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
    private readonly roomAdd: RoomService,
    private readonly routerLinkNavigate: RouterLinkNavigateService,
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
          .icon(Icon.HOUSE_DOOR)
          .build(),

        this.builder
          .initCommand(() => this.createRoomCommand())
          .visible(of(true))
          .label('Utwórz pokój')
          .icon(Icon.PLUS_CIRCLE)
          .build(),
      ]),
    );
  }

  private createRoomCommand(): MenuItemCommand {
    return () => {
      this.roomAdd.create().subscribe({
        next: (room) => this.navigateToCreatedRoom(room),
      });
    };
  }

  private navigateToCreatedRoom(room: Room): void {
    const { id } = room;

    this.routerLinkNavigate.navigate(RouterPath.ROOM_UPDATE, {
      [RouterPathParam.ROOM_ID]: id,
    });
  }
}
