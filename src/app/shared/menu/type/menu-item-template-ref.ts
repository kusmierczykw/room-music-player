import { MenuItem } from '../model/menu-item';
import { TemplateRef } from '@angular/core';

export type MenuItemTemplateRef = TemplateRef<{
  item: MenuItem;
}>;
