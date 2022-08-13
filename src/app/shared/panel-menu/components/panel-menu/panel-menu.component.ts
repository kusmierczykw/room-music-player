import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from '@shared/menu/models/menu-item';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipes/primeng-menu-items-converter.pipe';
import { Nil } from '@utils/types/nil';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipes/only-visible-item.pipe';

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
  @Input() items!: Nil<MenuItem[]>;
}
