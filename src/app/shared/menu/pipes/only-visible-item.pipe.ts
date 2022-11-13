import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { combineLatest, map, Observable, of, switchMap } from 'rxjs';
import { MenuItemBuilderService } from '@shared/menu/builders/menu-item-builder.service';
import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';

@Pipe({
  name: 'onlyVisibleItems',
  standalone: true,
})
export class OnlyVisibleItemsPipe implements PipeTransform {
  constructor(private readonly builder: MenuItemBuilderService) {}

  transform(items: Nullable<MenuItem[]>): Nullable<Observable<MenuItem[]>> {
    if (isNullable(items)) {
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

            if (isNullable(children)) {
              return of(item);
            }

            const children$ = this.onlyVisibleItems(children);

            return children$.pipe(
              map((children) =>
                this.builder
                  .from(item)
                  .children(() => children)
                  .build(),
              ),
            );
          }),
        ),
      ),
    ).pipe(
      map((items: Nullable<MenuItem>[]) =>
        items.filter(
          (item: Nullable<MenuItem>): item is MenuItem => !isNullable(item),
        ),
      ),
    );
  }
}
