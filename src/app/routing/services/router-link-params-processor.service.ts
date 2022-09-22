import { Injectable } from '@angular/core';
import { RouterPathParams } from '@routing/types/router-path-params';
import { RouterLinkParts } from '@routing/types/router-link-parts';
import { RouterLinkPart } from '@routing/types/router-link-part';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterPathParamValueNotFoundException } from '@routing/exceptions/router-path-param-value-not-found.exception';
import { isNil, Nil } from '@utils/types/nil';
import { keyByValue } from '@utils/types/enums';
import { RouterLink } from '@routing/types/router-link';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkParamsProcessorService {
  process(parts: RouterLinkParts, params?: Nil<RouterPathParams>): RouterLink {
    return parts.map((part: RouterLinkPart) => {
      if (!this.isRouterPathParam(part)) {
        return part;
      }

      if (!isNil(params)) {
        const value = params[part];

        if (!isNil(value)) {
          return value;
        }
      }

      const name = keyByValue(part, RouterPathParam);

      throw new RouterPathParamValueNotFoundException(
        `No value was passed for the router path parameter ${name}.`,
      );
    });
  }

  private isRouterPathParam(part: RouterLinkPart): part is RouterPathParam {
    return (Object.values(RouterPathParam) as string[]).includes(part);
  }
}
