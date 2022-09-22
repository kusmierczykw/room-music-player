import { Observable } from 'rxjs';
import { Menu } from '@shared/menu/models/menu';

export interface MenuProvider {
  source$(): Observable<Menu>;
}
