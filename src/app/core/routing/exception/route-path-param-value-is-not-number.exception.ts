import { RouterPathParam } from '@core/routing/enum/router-path-param';

export class RoutePathParamValueIsNotNumberException extends Error {
  constructor(param: RouterPathParam) {
    super(`The type of param "${param}" is not a number.`);
  }
}
