import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, fromEvent, map, Observable, startWith } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollLayoutService {
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

  isScrolledDown(): Observable<boolean> {
    return fromEvent(this.document, 'scroll').pipe(
      map(() => this.isWindowScrolledDown()),
      startWith(this.isWindowScrolledDown()),
    );
  }

  private isWindowScrolledDown(): boolean {
    return window.scrollY > 0;
  }
}
