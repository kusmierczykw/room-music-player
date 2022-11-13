import { Injectable } from '@angular/core';
import { RouterPath } from '@core/routing/enum/router-path';
import { RouterLinkParts } from '@core/routing/type/router-link-parts';
import { RouterPathFragment } from '@core/routing/enum/router-path-fragment';
import { RouterLinkParamsProcessorService } from '@core/routing/service/router-link-params-processor.service';
import { RouterPathParams } from '@core/routing/type/router-path-params';
import { RouterLink } from '@core/routing/type/router-link';
import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { Nullable } from '@util/type/nullable/nullable';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkProvider {
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
