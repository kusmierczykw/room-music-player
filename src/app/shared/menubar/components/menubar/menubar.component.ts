import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from '@shared/menu/models/menu-item';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipes/only-visible-item.pipe';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipes/primeng-menu-items-converter.pipe';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    OnlyVisibleItemsPipe,
    PrimengMenuItemsConverterPipe,
  ],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent {
  @Input() items!: MenuItem[];
}
