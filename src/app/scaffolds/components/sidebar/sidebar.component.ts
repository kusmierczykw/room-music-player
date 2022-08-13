import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoRouterLinkComponent } from '@scaffolds/components/logo-router-link/logo-router-link.component';
import { PanelMenuComponent } from '@shared/panel-menu/components/panel-menu/panel-menu.component';
import { MenuItem } from '@shared/menu/models/menu-item';
import { SidebarMenuProviderService } from '@scaffolds/providers/sidebar-menu-provider.service';
import { Observable } from 'rxjs';
import { SidebarRoomsMenuProviderService } from '@scaffolds/providers/sidebar-rooms-menu-provider.service';
import { DividerComponent } from '@shared/divider/divider.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    LogoRouterLinkComponent,
    PanelMenuComponent,
    DividerComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  readonly sidebarMenu$: Observable<MenuItem[]>;
  readonly roomsMenu$: Observable<MenuItem[]>;

  constructor(
    private readonly menuProvider: SidebarMenuProviderService,
    private readonly roomsMenuProvider: SidebarRoomsMenuProviderService,
  ) {
    this.sidebarMenu$ = this.menuProvider.source$();
    this.roomsMenu$ = this.roomsMenuProvider.source$();
  }
}
