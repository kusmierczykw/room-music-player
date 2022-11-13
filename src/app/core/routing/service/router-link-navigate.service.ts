import { Injectable } from '@angular/core';
import { RouterPath } from '@core/routing/enum/router-path';
import { RouterLinkProvider } from '@core/routing/provider/router-link.provider';
import { Router } from '@angular/router';
import { RouterPathParams } from '@core/routing/type/router-path-params';
import { Nullable } from '@util/type/nullable/nullable';

@Injectable({
  providedIn: 'root',
})
export class RouterLinkNavigateService {
  constructor(
    private readonly routerLinkProvider: RouterLinkProvider,
    private readonly router: Router,
  ) {}

  navigate(routerPath: RouterPath, params?: Nullable<RouterPathParams>): void {
    void this.router.navigate(
      this.routerLinkProvider.routerLink(routerPath, params),
    );
  }
}
