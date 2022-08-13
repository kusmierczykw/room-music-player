import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollTopService } from '@core/scroll/services/scroll-top.service';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopAfterNavigationService {
  constructor(
    private readonly router: Router,
    private readonly scrollTop: ScrollTopService,
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => this.scrollTop.scrollTop());
  }
}
