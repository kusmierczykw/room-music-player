import { Injectable } from '@angular/core';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { isNil } from '@utils/types/nullable';
import { NotFoundException } from '@core/exceptions/not-found-exception';
import { Uuid } from '@core/uuid/types/uuid';
import { map, Observable } from 'rxjs';
import { isNumber } from '@utils/types/number/is-number';
import { TypeMismatchException } from '@core/exceptions/type-mismatch-exception';

@Injectable({
  providedIn: 'root',
})
export class ActivatedRouteUtilsService {
  param(param: RouterPathParam, route: ActivatedRoute): string {
    return this.paramFromSnapshot(param, route.snapshot);
  }

  paramFromSnapshot(
    param: RouterPathParam,
    snapshot: ActivatedRouteSnapshot,
  ): string {
    const result = snapshot.paramMap.get(param);

    if (isNil(result)) {
      throw new NotFoundException(
        `The param "${param}" is not found in the route.`,
      );
    }

    return result;
  }

  uuidParamFromSnapshot(
    param: RouterPathParam,
    snapshot: ActivatedRouteSnapshot,
  ): Uuid {
    return this.paramFromSnapshot(param, snapshot) as Uuid;
  }

  numberParamFromSnapshot(
    param: RouterPathParam,
    snapshot: ActivatedRouteSnapshot,
  ): number {
    const result = +this.paramFromSnapshot(param, snapshot);

    if (!isNumber(result)) {
      throw new TypeMismatchException(
        `The type of param "${param}" is not a number.`,
      );
    }

    return result;
  }

  param$(param: RouterPathParam, route: ActivatedRoute): Observable<string> {
    return route.paramMap.pipe(
      map((params) => {
        const result = params.get(param);

        if (isNil(result)) {
          throw new NotFoundException(
            `The param "${param}" is not found in the route.`,
          );
        }

        return result;
      }),
    );
  }

  uuidParam$(param: RouterPathParam, route: ActivatedRoute): Observable<Uuid> {
    return this.param$(param, route) as Observable<Uuid>;
  }

  uuidParam(param: RouterPathParam, route: ActivatedRoute): Uuid {
    return this.param(param, route) as Uuid;
  }

  numberParam$(
    param: RouterPathParam,
    route: ActivatedRoute,
  ): Observable<number> {
    return this.param$(param, route).pipe(
      map((value) => {
        const result = +value;

        if (!isNumber(result)) {
          throw new TypeMismatchException(
            `The type of param "${param}" is not a number.`,
          );
        }

        return result;
      }),
    );
  }
}
