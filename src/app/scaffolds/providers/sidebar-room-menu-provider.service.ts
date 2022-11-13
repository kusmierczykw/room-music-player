import { Injectable } from '@angular/core';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { map, Observable } from 'rxjs';
import { Menu } from '@shared/menu/models/menu';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPath } from '@routing/enums/router-path';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RoomsProviderService } from '@modules/room/providers/rooms-provider.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarRoomMenuProviderService implements MenuProvider {
  constructor(
    private readonly roomsProvider: RoomsProviderService,
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
  ) {}

  source$(): Observable<Menu> {
    return this.roomsProvider.rooms$().pipe(
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
