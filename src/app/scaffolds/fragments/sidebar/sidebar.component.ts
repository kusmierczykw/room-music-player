import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoRouterLinkComponent } from '@scaffolds/fragments/logo-router-link/logo-router-link.component';
import { PanelMenuComponent } from '@shared/panel-menu/components/panel-menu/panel-menu.component';
import { MenuItem } from '@shared/menu/models/menu-item';
import { SidebarMenuProviderService } from '@scaffolds/providers/sidebar-menu-provider.service';
import { Observable } from 'rxjs';
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

  constructor(private readonly menuProvider: SidebarMenuProviderService) {
    this.sidebarMenu$ = this.menuProvider.source$();
  }
}
