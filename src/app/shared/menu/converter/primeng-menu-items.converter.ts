import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/model/menu-item';
import { MenuItem as PrimengMenuItem } from 'primeng/api';
import { valueOrUndefined } from '@util/type/nullable/value-or-undefined';
import { Nullable } from '@util/type/nullable/nullable';
import { isNullable } from '@util/type/nullable/is-nullable';
import { IconProvider } from '@core/asset/icon/provider/icon.provider';
import { Icon } from '@core/asset/icon/enum/icon';

@Injectable({
  providedIn: 'root',
})
export class PrimengMenuItemsConverter {
  constructor(private readonly iconProvider: IconProvider) {}

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

  private prepareChildren(children: Nullable<MenuItem[]>) {
    if (isNullable(children)) {
      return children;
    }

    return children.map((item) => this.convert(item));
  }

  private prepareCssIcon(icon: Nullable<Icon>): Nullable<string> {
    if (isNullable(icon)) {
      return icon;
    }

    return this.iconProvider.icon(icon);
  }
}
