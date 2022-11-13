import { Injectable } from '@angular/core';
import { RouterPath } from '@routing/enums/router-path';
import { RouterLinkParts } from '@routing/types/router-link-parts';
import { RouterPathFragment } from '@routing/enums/router-path-fragment';
import { RouterLinkParamsProcessorService } from '@routing/services/router-link-params-processor.service';
import { RouterPathParams } from '@routing/types/router-path-params';
import { RouterLink } from '@routing/types/router-link';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { Nullable } from '@utils/types/nullable/nullable';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProviderService {
  private routerLinks: Record<RouterPath, RouterLinkParts> = {
    [RouterPath.ROOT]: [
      RouterPathFragment.ROOT, //
    ],

    [RouterPath.ROOM_UPDATE]: [
      RouterPathFragment.ROOT,
      RouterPathFragment.ROOMS,
      RouterPathParam.ROOM_ID,
      RouterPathFragment.UPDATE,
    ],
  };

  constructor(
    private readonly paramsProcessor: RouterLinkParamsProcessorService,
  ) {}

  routerLink(
    path: RouterPath,
    params?: Nullable<RouterPathParams>,
  ): RouterLink {
    return this.paramsProcessor.process(this.routerLinks[path], params);
  }
}
