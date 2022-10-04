import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { isNil, Nil } from '@utils/types/nil';
import { valueOrUndefined } from '@utils/types/nil/value-or-undefined';
import { IconProviderService } from '@core/assets/icons/providers/icon-provider.service';
import { Icon } from '@core/assets/icons/enums/icon';

@Injectable({
  providedIn: 'root',
})
export class PrimengMenuItemsConverterService {
  constructor(private readonly iconProvider: IconProviderService) {}

  convert(item: MenuItem): PrimengMenuItem {
    const { children, label, link, command, routerLink, icon } = item;
    const cssIcon = this.prepareCssIcon(icon);
    const items = this.prepareChildren(children);

    return {
      label,
      icon: valueOrUndefined(cssIcon),
      command: valueOrUndefined(command),
      routerLink: valueOrUndefined(routerLink),
      url: valueOrUndefined(link),
      items: valueOrUndefined(items),
    };
  }

  private prepareChildren(children: Nil<MenuItem[]>) {
    if (isNil(children)) {
      return children;
    }

    return children.map((item) => this.convert(item));
  }

  private prepareCssIcon(icon: Nil<Icon>): Nil<string> {
    if (isNil(icon)) {
      return icon;
    }

    return this.iconProvider.icon(icon);
  }
}
