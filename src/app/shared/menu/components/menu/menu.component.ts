import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/models/menu-item';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipes/only-visible-item.pipe';
import { Nil } from '@utils/types/nil';
import { MenuItemTemplate } from '@shared/menu/interfaces/menu-item-template';
import { MenuItemType } from '@shared/menu/enums/menu-item-type';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipes/primeng-menu-items-converter.pipe';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    TieredMenuModule,
    OnlyVisibleItemsPipe,
    PrimengMenuItemsConverterPipe,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items!: MenuItem[];
  @Input() template?: Nil<TemplateRef<MenuItemTemplate>>;

  readonly MenuItemType = MenuItemType;
}
