import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoRouterLinkComponent } from '../logo-router-link/logo-router-link.component';
import { PanelMenuComponent } from '@shared/menu/component/panel-menu/panel-menu.component';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() scrollable = true;
}
