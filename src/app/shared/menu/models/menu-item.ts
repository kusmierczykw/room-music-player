import { MenuItemType } from '../enums/menu-item-type';
import { RouterLink } from '@routing/types/router-link';
import { MenuItemCommand } from '../types/menu-item-command';
import { isNil, Nil } from '@utils/types/nil';
import { combineLatest, map, Observable, of, startWith, switchMap } from 'rxjs';
import { Icon } from '@core/assets/icons/enums/icon';

export class MenuItem {
  readonly visibility$: Observable<boolean>;

  constructor(
    private readonly _visibility$: Observable<boolean>,
    readonly label: string,
    readonly type: MenuItemType,
    readonly routerLink?: Nil<RouterLink>,
    readonly link?: Nil<string>,
    readonly command?: Nil<MenuItemCommand>,
    readonly children?: Nil<MenuItem[]>,
    readonly icon?: Nil<Icon>,
  ) {
    this.visibility$ = this.visibilitySource$();
  }

  private visibilitySource$(): Observable<boolean> {
    return this._visibility$
      .pipe(
        switchMap((visible) => {
          if (!visible) {
            return of(visible);
          }

          if (isNil(this.children)) {
            return of(visible);
          }

          return this.childrenVisibility$();
        }),
      )
      .pipe(startWith(false));
  }

  private childrenVisibility$(): Observable<boolean> {
    if (isNil(this.children)) {
      return of(false);
    }

    return combineLatest(
      this.children.map(({ visibility$ }) => visibility$),
    ).pipe(map((visibility) => visibility.some((visible) => visible)));
  }
}
