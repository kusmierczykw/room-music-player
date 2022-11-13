import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLinkPipe } from '@core/routing/pipe/router-link.pipe';
import { LogoComponent } from '@layout/fragment/logo/logo.component';
import { RouterPath } from '@core/routing/enum/router-path';

@Component({
  selector: 'app-logo-router-link',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, RouterLinkPipe],
  templateUrl: './logo-router-link.component.html',
  styleUrls: ['./logo-router-link.component.scss'],
})
export class LogoRouterLinkComponent {
  readonly HOME_ROUTER_PATH = RouterPath.ROOT;
}
