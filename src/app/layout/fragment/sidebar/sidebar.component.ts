import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuComponent } from '@shared/menu/component/panel-menu/panel-menu.component';
import { Observable } from 'rxjs';
import { DividerComponent } from '@shared/divider/divider.component';
import { Menu } from '@shared/menu/model/menu';
import { LogoRouterLinkComponent } from '@layout/fragment/logo-router-link/logo-router-link.component';
import { SidebarMainMenuProvider } from '@layout/provider/sidebar-main-menu.provider';
import { SidebarRoomMenuProvider } from '@layout/provider/sidebar-room-menu.provider';

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
    private readonly mainMenuProvider: SidebarMainMenuProvider,
    private readonly roomMenuProvider: SidebarRoomMenuProvider,
  ) {}

  private mainMenuSource$(): Observable<Menu> {
    return this.mainMenuProvider.source$();
  }

  private roomMenuSource$(): Observable<Menu> {
    return this.roomMenuProvider.source$();
  }
}
