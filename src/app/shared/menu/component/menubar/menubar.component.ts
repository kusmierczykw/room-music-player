import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { OnlyVisibleItemsPipe } from '@shared/menu/pipe/only-visible-item.pipe';
import { PrimengMenuItemsConverterPipe } from '@shared/menu/pipe/primeng-menu-items-converter.pipe';
import { Menu } from '@shared/menu/model/menu';

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
  @Input() menu!: Menu;
}
