import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, map, Observable } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopService {
  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly router: Router,
  ) {}

  scrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  scrollTopAfterNavigation(): Observable<void> {
    return this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.scrollTop()),
    );
  }
}
