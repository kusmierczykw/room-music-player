import { Pipe, PipeTransform } from '@angular/core';
import { RouterPath } from '@routing/enums/router-path';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { RouterPathParams } from '@routing/types/router-path-params';
import { RouterLink } from '@routing/types/router-link';
import { Nullable } from '@utils/types/nullable/nullable';

@Pipe({
  name: 'routerLink',
  standalone: true,
})
export class RouterLinkPipe implements PipeTransform {
  constructor(private readonly routerLinkProvider: RouterLinkProviderService) {}

  transform(
    routerPath: RouterPath,
    params?: Nullable<RouterPathParams>,
  ): RouterLink {
    return this.routerLinkProvider.routerLink(routerPath, params);
  }
}
