import { Injectable } from '@angular/core';
import { MenuProvider } from '@shared/menu/abstracts/menu-provider';
import { Observable, of } from 'rxjs';
import { Menu } from '@shared/menu/models/menu';

@Injectable({
  providedIn: 'root',
})
export class SidebarRoomMenuProviderService implements MenuProvider {
  constructor() {}

  source$(): Observable<Menu> {
    return of(new Menu([]));
  }
}
