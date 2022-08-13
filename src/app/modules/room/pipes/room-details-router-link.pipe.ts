import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { Room } from '@modules/room/models/room';
import { RouterLink } from '@routing/types/router-link';
import { RouterPath } from '@routing/enums/router-path';
import { RouterPathParam } from '@routing/enums/router-path-param';

@Pipe({
  name: 'roomDetailsRouterLink',
  standalone: true,
})
export class RoomDetailsRouterLinkPipe implements PipeTransform {
  constructor(private readonly routerLinkProvider: RouterLinkProviderService) {}

  transform(room: Room): RouterLink {
    const { id } = room;

    return this.routerLinkProvider.routerLink(RouterPath.ROOM_DETAILS, {
      [RouterPathParam.ROOM_ID]: id,
    });
  }
}
