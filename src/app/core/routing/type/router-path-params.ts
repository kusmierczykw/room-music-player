import { RouterPathParam } from '@core/routing/enum/router-path-param';
import { RouterPathParamsValue } from '@core/routing/type/router-path-params-value';

export type RouterPathParams = {
  [key in RouterPathParam]?: RouterPathParamsValue;
};
