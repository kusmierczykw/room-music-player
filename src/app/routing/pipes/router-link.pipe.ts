import { Pipe, PipeTransform } from '@angular/core';
import { RouterPath } from '@routing/enums/router-path';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPathParams } from '@routing/types/router-path-params';
import { Nil } from '@utils/types/nil';
import { RouterLink } from '@routing/types/router-link';

@Pipe({
  name: 'routerLink',
  standalone: true,
})
export class RouterLinkPipe implements PipeTransform {
  constructor(private readonly routerLinkProvider: RouterLinkProviderService) {}

  transform(
    routerPath: RouterPath,
    params?: Nil<RouterPathParams>,
  ): RouterLink {
    return this.routerLinkProvider.routerLink(routerPath, params);
  }
}
