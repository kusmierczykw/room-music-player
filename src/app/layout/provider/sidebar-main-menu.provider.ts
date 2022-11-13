import { Injectable } from '@angular/core';
import { MenuItemBuilder } from '@shared/menu/builder/menu-item.builder';
import { Observable, of } from 'rxjs';
import { MenuProvider } from '@shared/menu/provider/menu.provider';
import { MenuItemCommand } from '@shared/menu/type/menu-item-command';
import { Menu } from '@shared/menu/model/menu';
import { RoomService } from '@application/room/service/room.service';
import { Room } from '@domain/room/room';
import { RouterLinkProvider } from '@core/routing/provider/router-link.provider';
import { RouterLinkNavigateService } from '@core/routing/service/router-link-navigate.service';
import { RouterPath } from '@core/routing/enum/router-path';
import { Icon } from '@core/asset/icon/enum/icon';
import { RouterPathParam } from '@core/routing/enum/router-path-param';

@Injectable({
  providedIn: 'root',
})
export class SidebarMainMenuProvider implements MenuProvider {
  constructor(
    private readonly builder: MenuItemBuilder,
    private readonly routerLinkProvider: RouterLinkProvider,
    private readonly room: RoomService,
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
      this.room.create('Nowy pokój').subscribe({
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
