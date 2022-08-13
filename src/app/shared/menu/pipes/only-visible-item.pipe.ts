import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { isNil, Nil } from '@utils/types/nil';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';

@Pipe({
  name: 'onlyVisibleItems',
  standalone: true,
})
export class OnlyVisibleItemsPipe implements PipeTransform {
  transform(items: Nil<MenuItem[]>): Nil<Observable<MenuItem[]>> {
    if (isNil(items)) {
      return items;
    }

    return this.onlyVisibleItems(items);
  }

  private onlyVisibleItems(items: MenuItem[]): Observable<MenuItem[]> {
    return combineLatest(
      items.map((item) =>
        item.visibility$.pipe(
          switchMap((visible) => {
            if (!visible) {
              return of(null);
            }

            const { children } = item;

            if (isNil(children)) {
              return of(item);
            }

            const children$ = this.onlyVisibleItems(children);

            return children$.pipe(map((children) => item.clone({ children })));
          }),
        ),
      ),
    ).pipe(
      map((items: Nil<MenuItem>[]) =>
        items.filter((item: Nil<MenuItem>): item is MenuItem => !isNil(item)),
      ),
    );
  }
}
