import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@layout/fragment/navbar/navbar.component';
import { MenubarComponent } from '@shared/menu/component/menubar/menubar.component';
import { SidebarComponent } from '@layout/fragment/sidebar/sidebar.component';
import { FooterComponent } from '@layout/fragment/footer/footer.component';
import { Subject, takeUntil } from 'rxjs';
import { ScrollTopLayoutService } from '@layout/service/scroll-top-layout.service';

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
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly scrollTop: ScrollTopLayoutService) {}

  ngOnInit(): void {
    this.registerScrollTopAfterNavigation();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private registerScrollTopAfterNavigation(): void {
    this.scrollTop
      .scrollTopAfterNavigation()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
