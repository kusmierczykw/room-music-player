import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterPathParamsValue } from '@routing/types/router-path-params-value';

export type RouterPathParams = {
  [key in RouterPathParam]?: RouterPathParamsValue;
};
