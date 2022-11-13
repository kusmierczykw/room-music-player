import { Injectable } from '@angular/core';
import { RouterPathParams } from '@routing/types/router-path-params';
import { RouterLinkParts } from '@routing/types/router-link-parts';
import { RouterLinkPart } from '@routing/types/router-link-part';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterPathParamValueNotFoundException } from '@routing/exceptions/router-path-param-value-not-found.exception';
import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';
import { RouterLink } from '@routing/types/router-link';
import { keyByValue } from '@utils/types/enums/key-by-value';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkParamsProcessorService {
  process(
    parts: RouterLinkParts,
    params?: Nullable<RouterPathParams>,
  ): RouterLink {
    return parts.map((part: RouterLinkPart) => {
      if (!this.isRouterPathParam(part)) {
        return part;
      }

      if (!isNullable(params)) {
        const value = params[part];

        if (!isNullable(value)) {
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
