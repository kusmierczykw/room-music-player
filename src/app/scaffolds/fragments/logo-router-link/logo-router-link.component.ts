import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterPath } from '@routing/enums/router-path';
import { LogoComponent } from '@scaffolds/fragments/logo/logo.component';
import { RouterLinkPipe } from '@routing/pipes/router-link.pipe';
import { RouterModule } from '@angular/router';

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
