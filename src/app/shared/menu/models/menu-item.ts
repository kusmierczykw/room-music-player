import { MenuItemType } from '../enums/menu-item-type';
import { RouterLink } from '@routing/types/router-link';
import { MenuItemCommand } from '../types/menu-item-command';
import { isNil, Nil } from '@utils/types/nil';
import { combineLatest, map, Observable, of, startWith, switchMap } from 'rxjs';

export class MenuItem {
  readonly visibility$: Observable<boolean>;

  constructor(
    private readonly visible$: Observable<boolean>,
    readonly label: string,
    readonly type: MenuItemType,
    readonly routerLink?: Nil<RouterLink>,
    readonly link?: Nil<string>,
    readonly command?: Nil<MenuItemCommand>,
    readonly children?: Nil<MenuItem[]>,
  ) {
    this.visibility$ = this.visibilitySource$();
  }

  clone(update?: {
    visible$?: Observable<boolean>;
    label?: string;
    children?: Nil<MenuItem[]>;
  }): MenuItem {
    const label = update?.label ?? this.label;
    const visible$ = update?.visible$ ?? this.visible$;
    const children = update?.children ?? this.children;

    return new MenuItem(
      visible$,
      label,
      this.type,
      this.routerLink,
      this.link,
      this.command,
      children,
    );
  }

  private visibilitySource$(): Observable<boolean> {
    return this.visible$
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
