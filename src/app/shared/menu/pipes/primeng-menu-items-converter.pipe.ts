import { Pipe, PipeTransform } from '@angular/core';
import { PrimengMenuItemsConverterService } from '@shared/menu/converters/primeng-menu-items-converter.service';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { isNil, Nil } from '@utils/types/nil';

@Pipe({
  name: 'primengMenuItemsConverter',
  standalone: true,
})
export class PrimengMenuItemsConverterPipe implements PipeTransform {
  constructor(
    private readonly menuItemsConverter: PrimengMenuItemsConverterService,
  ) {}

  transform(items: Nil<MenuItem[]>): PrimengMenuItem[] {
    if (isNil(items)) {
      return [];
    }

    return items.map((item) => this.menuItemsConverter.convert(item));
  }
}
