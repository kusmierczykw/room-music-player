import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@layout/fragment/navbar/navbar.component';
import { MenubarComponent } from '@shared/menu/component/menubar/menubar.component';
import { SidebarComponent } from '@layout/fragment/sidebar/sidebar.component';
import { FooterComponent } from '@layout/fragment/footer/footer.component';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ScrollLayoutService } from '@layout/service/scroll-layout.service';
import { PanelMenuComponent } from '@shared/menu/component/panel-menu/panel-menu.component';
import { SidebarMainMenuProvider } from '@layout/provider/sidebar-main-menu.provider';
import { Menu } from '@shared/menu/model/menu';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MenubarComponent,
    SidebarComponent,
    FooterComponent,
    PanelMenuComponent,
    SidebarComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  readonly isScrolledDown$ = this.scroll.isScrolledDown();
  readonly sidebarMenu$ = this.sidebarMenuSource();
  readonly navbarMenu$ = this.navbarMenuSource();

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly scroll: ScrollLayoutService,
    private readonly sidebarMainMenuProvider: SidebarMainMenuProvider,
  ) {}

  ngOnInit(): void {
    this.registerScrollTopAfterNavigation();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private registerScrollTopAfterNavigation(): void {
    this.scroll
      .scrollTopAfterNavigation()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  private sidebarMenuSource(): Observable<Menu> {
    return this.sidebarMainMenuProvider.source();
  }

  private navbarMenuSource(): Observable<Menu> {
    return this.sidebarMainMenuProvider.source();
  }
}
