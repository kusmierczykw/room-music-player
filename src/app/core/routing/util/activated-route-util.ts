import { Injectable } from '@angular/core';
import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RoutePathParamNotFoundException } from '@core/routing/exception/route-path-param-not-found.exception';
import { map, Observable } from 'rxjs';
import { isNumber } from '@util/type/number/is-number';
import { RoutePathParamValueIsNotNumberException } from '@core/routing/exception/route-path-param-value-is-not-number.exception';
import { isNullable } from '@util/type/nullable/is-nullable';

@Injectable({
  providedIn: 'root',
})
export class ActivatedRouteUtil {
  param(param: RouterPathParam, route: ActivatedRoute): string {
    return this.paramFromSnapshot(param, route.snapshot);
  }

  numberParam(param: RouterPathParam, route: ActivatedRoute): number {
    return this.numberParamFromSnapshot(param, route.snapshot);
  }

  paramFromSnapshot(
    param: RouterPathParam,
    snapshot: ActivatedRouteSnapshot,
  ): string {
    const result = snapshot.paramMap.get(param);

    if (isNullable(result)) {
      throw new RoutePathParamNotFoundException(param);
    }

    return result;
  }

  numberParamFromSnapshot(
    param: RouterPathParam,
    snapshot: ActivatedRouteSnapshot,
  ): number {
    const result = +this.paramFromSnapshot(param, snapshot);

    if (!isNumber(result)) {
      throw new RoutePathParamValueIsNotNumberException(param);
    }

    return result;
  }

  paramStream(
    param: RouterPathParam,
    route: ActivatedRoute,
  ): Observable<string> {
    return route.paramMap.pipe(
      map((params) => {
        const result = params.get(param);

        if (isNullable(result)) {
          throw new RoutePathParamNotFoundException(param);
        }

        return result;
      }),
    );
  }

  numberParamStream(
    param: RouterPathParam,
    route: ActivatedRoute,
  ): Observable<number> {
    return this.paramStream(param, route).pipe(
      map((value) => {
        const result = +value;

        if (!isNumber(result)) {
          throw new RoutePathParamValueIsNotNumberException(param);
        }

        return result;
      }),
    );
  }
}
