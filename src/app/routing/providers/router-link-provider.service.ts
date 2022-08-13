import { Injectable } from '@angular/core';
import { RouterPath } from '@routing/enums/router-path';
import { RouterLinkParts } from '@routing/types/router-link-parts';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';
import { Nil } from '@utils/types/nil';
import { RouterLinkParamsProcessorService } from '@routing/services/router-link-params-processor.service';
import { RouterPathParams } from '@routing/types/router-path-params';
import { RouterLink } from '@routing/types/router-link';
import { RouterPathParam } from '@routing/enums/router-path-param';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  private routerLinks: Record<RouterPath, RouterLinkParts> = {
    [RouterPath.PLAYER]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.PLAYER,
    ],
    [RouterPath.ROOMS]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.ROOMS,
    ],
    [RouterPath.ROOM_CREATE]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.ROOMS,
      RouterPathFragment.CREATE,
    ],
    [RouterPath.ROOM_DETAILS]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.ROOMS,
      RouterPathParam.ROOM_ID,
    ],
    [RouterPath.ROOM_NOT_FOUND]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.ROOMS,
      RouterPathFragment.NOT_FOUND,
    ],
    [RouterPath.ROOT]: [
      RouterPathFragment.ROOT, //
    ],
    [RouterPath.USERS]: [
      RouterPathFragment.ROOT, //
      RouterPathFragment.USERS,
    ],
  };

  constructor(
    private readonly paramsProcessor: RouterLinkParamsProcessorService,
  ) {}

  routerLink(path: RouterPath, params?: Nil<RouterPathParams>): RouterLink {
    return this.paramsProcessor.process(this.routerLinks[path], params);
  }
}
