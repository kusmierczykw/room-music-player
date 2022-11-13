import { Injectable } from '@angular/core';
import { RouterPathParams } from '@core/routing/type/router-path-params';
import { RouterLinkParts } from '@core/routing/type/router-link-parts';
import { RouterLinkPart } from '@core/routing/type/router-link-part';
import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { RouterPathParamValueNotFoundException } from '@core/routing/exception/router-path-param-value-not-found.exception';
import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';
import { RouterLink } from '@core/routing/type/router-link';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkParamsProcessorService {
  process(
    parts: RouterLinkParts,
    params?: Nullable<RouterPathParams>,
  ): RouterLink {
    return parts.map((param: RouterLinkPart) => {
      if (!this.isRouterPathParam(param)) {
        return param;
      }

      if (!isNullable(params)) {
        const value = params[param];

        if (!isNullable(value)) {
          return value;
        }
      }

      throw new RouterPathParamValueNotFoundException(param);
    });
  }

  private isRouterPathParam(part: RouterLinkPart): part is RouterPathParam {
    return (Object.values(RouterPathParam) as string[]).includes(part);
  }
}
