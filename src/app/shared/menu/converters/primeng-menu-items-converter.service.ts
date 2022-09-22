import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { isNil } from '@utils/types/nil';
import { valueOrUndefined } from '@utils/types/nil/value-or-undefined';

@Injectable({
  providedIn: 'root',
})
export class PrimengMenuItemsConverterService {
  convert(item: MenuItem): PrimengMenuItem {
    const { children, label, link, command, routerLink } = item;

    return {
      label,
      command: valueOrUndefined(command),
      routerLink: valueOrUndefined(routerLink),
      url: valueOrUndefined(link),
      items: !isNil(children)
        ? children.map((item) => this.convert(item))
        : undefined,
    };
  }
}
