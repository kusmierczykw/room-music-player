import { Injectable } from '@angular/core';
import { RouterPath } from '@routing/enums/router-path';
import { RouterLinkProviderService } from '@routing/providers/router-link-provider.service';
import { Router } from '@angular/router';
import { Nil } from '@utils/types/nil';
import { RouterPathParams } from '@routing/types/router-path-params';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkNavigateService {
  constructor(
    private readonly routerLinkProvider: RouterLinkProviderService,
    private readonly router: Router,
  ) {}

  navigate(routerPath: RouterPath, params?: Nil<RouterPathParams>): void {
    void this.router.navigate(
      this.routerLinkProvider.routerLink(routerPath, params),
    );
  }
}
