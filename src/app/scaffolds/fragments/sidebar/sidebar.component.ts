import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoRouterLinkComponent } from '@scaffolds/fragments/logo-router-link/logo-router-link.component';
import { PanelMenuComponent } from '@shared/panel-menu/components/panel-menu/panel-menu.component';
import { SidebarMainMenuProviderService } from '@scaffolds/providers/sidebar-main-menu-provider.service';
import { Observable } from 'rxjs';
import { DividerComponent } from '@shared/divider/divider.component';
import { Menu } from '@shared/menu/models/menu';
import { SidebarRoomMenuProviderService } from '@scaffolds/providers/sidebar-room-menu-provider.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly mainMenu$ = this.mainMenuSource$();
  readonly roomMenu$ = this.roomMenuSource$();

  constructor(
    private readonly mainMenuProvider: SidebarMainMenuProviderService,
    private readonly roomMenuProvider: SidebarRoomMenuProviderService,
  ) {}

  private mainMenuSource$(): Observable<Menu> {
    return this.mainMenuProvider.source$();
  }

  private roomMenuSource$(): Observable<Menu> {
    return this.roomMenuProvider.source$();
  }
}
