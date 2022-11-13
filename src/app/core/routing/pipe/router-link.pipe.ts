import { Pipe, PipeTransform } from '@angular/core';
import { RouterPath } from '@core/routing/enum/router-path';
import { RouterLinkProvider } from '@core/routing/provider/router-link.provider';
import { RouterPathParams } from '@core/routing/type/router-path-params';
import { RouterLink } from '@core/routing/type/router-link';
import { Nullable } from '@util/type/nullable/nullable';

@Pipe({
  name: 'routerLink',
  standalone: true,
})
export class RouterLinkPipe implements PipeTransform {
  constructor(private readonly routerLinkProvider: RouterLinkProvider) {}

  transform(
    routerPath: RouterPath,
    params?: Nullable<RouterPathParams>,
  ): RouterLink {
    return this.routerLinkProvider.routerLink(routerPath, params);
  }
}
