import { RouterPathParam } from '@core/routing/enum/router-path-param';

export class RoutePathParamNotFoundException extends Error {
  constructor(param: RouterPathParam) {
    super(`The param "${param}" is not found in the route.`);
  }
}
