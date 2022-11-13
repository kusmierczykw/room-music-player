import { Pipe, PipeTransform } from '@angular/core';
import { PrimengMenuItemsConverterService } from '@shared/menu/converters/primeng-menu-items-converter.service';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';

@Pipe({
  name: 'primengMenuItemsConverter',
  standalone: true,
})
export class PrimengMenuItemsConverterPipe implements PipeTransform {
  constructor(
    private readonly menuItemsConverter: PrimengMenuItemsConverterService,
  ) {}

  transform(items: Nullable<MenuItem[]>): PrimengMenuItem[] {
    if (isNullable(items)) {
      return [];
    }

    return items.map((item) => this.menuItemsConverter.convert(item));
  }
}
