import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsProviderService {
  private readonly roomsSource$ = new BehaviorSubject([]);
}
