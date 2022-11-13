import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { keyByValue } from '@util/type/enum/key-by-value';

export class RouterPathParamValueNotFoundException extends Error {
  constructor(param: RouterPathParam) {
    const name = keyByValue(param, RouterPathParam);

    super(`No value was passed for the router path parameter "${name}".`);
  }
}
