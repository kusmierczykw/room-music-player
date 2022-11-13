import { Pipe, PipeTransform } from '@angular/core';
import { PrimengMenuItemsConverter } from '@shared/menu/converter/primeng-menu-items.converter';
import { MenuItem } from '@shared/menu/model/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';

@Pipe({
  name: 'primengMenuItemsConverter',
  standalone: true,
})
export class PrimengMenuItemsConverterPipe implements PipeTransform {
  constructor(private readonly menuItemsConverter: PrimengMenuItemsConverter) {}

  transform(items: Nullable<MenuItem[]>): PrimengMenuItem[] {
    if (isNullable(items)) {
      return [];
    }

    return items.map((item) => this.menuItemsConverter.convert(item));
  }
}
