import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ScrollTopService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  scrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
