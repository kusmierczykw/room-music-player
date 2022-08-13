import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterLink } from '@routing/types/router-link';
import { RouterPath } from '@routing/enums/router-path';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { Uuid } from '@core/uuid/types/uuid';

@Pipe({
  name: 'roomDetailsRouterLink',
  standalone: true,
})
export class RoomDetailsRouterLinkPipe implements PipeTransform {
  constructor(private readonly routerLinkProvider: RouterLinkProviderService) {}

  transform(roomId: Uuid): RouterLink {
    return this.routerLinkProvider.routerLink(RouterPath.ROOM_DETAILS, {
      [RouterPathParam.ROOM_ID]: roomId,
    });
  }
}
