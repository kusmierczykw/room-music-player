import { Observable } from 'rxjs';
import { Menu } from '@shared/menu/model/menu';

export interface MenuProvider {
  source$(): Observable<Menu>;
}
