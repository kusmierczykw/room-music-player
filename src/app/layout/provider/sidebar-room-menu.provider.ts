import { Injectable } from '@angular/core';
import { MenuProvider } from '@shared/menu/provider/menu.provider';
import { map, Observable } from 'rxjs';
import { Menu } from '@shared/menu/model/menu';
import { MenuItemBuilder } from '@shared/menu/builder/menu-item.builder';
import { RouterLinkProvider } from '@core/routing/provider/router-link.provider';
import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { RouterPath } from '@core/routing/enum/router-path';
import { RoomService } from '@application/room/service/room.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarRoomMenuProvider implements MenuProvider {
  constructor(
    private readonly room: RoomService,
    private readonly builder: MenuItemBuilder,
    private readonly routerLinkProvider: RouterLinkProvider,
  ) {}

  source(): Observable<Menu> {
    return this.room.fetchList().pipe(
      map(
        (rooms) =>
          new Menu(
            rooms.map(({ id, name }) =>
              this.builder
                .label(name)
                .initRouterLink(() =>
                  this.routerLinkProvider.routerLink(RouterPath.ROOM_UPDATE, {
                    [RouterPathParam.ROOM_ID]: id,
                  }),
                )
                .build(),
            ),
          ),
      ),
    );
  }
}
