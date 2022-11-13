import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '@shared/menu/model/menu-item';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipe/only-visible-item.pipe';
import { MenuItemTemplateRef } from '@shared/menu/type/menu-item-template-ref';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipe/primeng-menu-items-converter.pipe';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { Nullable } from '@util/type/nullable/nullable';

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
  @Input() templateRef?: Nullable<MenuItemTemplateRef>;
}
