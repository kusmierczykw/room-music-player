import { Injectable } from '@angular/core';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { MenuItem } from '@shared/menu/models/menu-item';
import { map, Observable } from 'rxjs';
import { RoomListProviderService } from '@modules/room/providers/room-list-provider.service';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPath } from '@routing/enums/router-path';
import { RouterPathParam } from '@routing/enums/router-path-param';

@Injectable({
  providedIn: 'root',
})
export class SidebarRoomsMenuProviderService implements MenuProvider {
  constructor(
    private readonly roomsProvider: RoomListProviderService,
    private readonly builder: MenuItemBuilderService,
    private readonly routerLinkProvider: RouterLinkProviderService,
  ) {}

  source$(): Observable<MenuItem[]> {
    return this.roomsProvider.roomList().pipe(
      map((items) =>
        items.map(({ id, name }) =>
          this.builder
            .initRouterLink(() =>
              this.routerLinkProvider.routerLink(RouterPath.ROOM_DETAILS, {
                [RouterPathParam.ROOM_ID]: id,
              }),
            )
            .label(name)
            .build(),
        ),
      ),
    );
  }
}
