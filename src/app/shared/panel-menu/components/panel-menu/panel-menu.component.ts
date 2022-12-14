import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipes/primeng-menu-items-converter.pipe';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipes/only-visible-item.pipe';
import { Menu } from '@shared/menu/models/menu';

@Component({
  selector: 'app-panel-menu',
  standalone: true,
  imports: [
    CommonModule,
    PanelMenuModule,
    PrimengMenuItemsConverterPipe,
    OnlyVisibleItemsPipe,
  ],
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.scss'],
})
export class PanelMenuComponent {
  @Input() menu!: Menu;
}
