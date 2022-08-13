import { Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';

export interface MenuProvider {
  source$(): Observable<MenuItem[]>;
}
