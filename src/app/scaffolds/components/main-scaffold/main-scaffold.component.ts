import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@scaffolds/fragments/navbar/navbar.component';
import { MenubarComponent } from '@shared/menubar/components/menubar/menubar.component';
import { SidebarComponent } from '@scaffolds/fragments/sidebar/sidebar.component';
import { FooterComponent } from '@scaffolds/fragments/footer/footer.component';
import { Subject, takeUntil } from 'rxjs';
import { ScrollTopService } from '@scaffolds/services/scroll-top.service';

@Component({
  selector: 'app-main-scaffold',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MenubarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  templateUrl: './main-scaffold.component.html',
  styleUrls: ['./main-scaffold.component.scss'],
})
export class MainScaffoldComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(private readonly scrollTopService: ScrollTopService) {}

  ngOnInit(): void {
    this.registerScrollTopAfterNavigation();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  private registerScrollTopAfterNavigation(): void {
    this.scrollTopService
      .scrollTopAfterNavigation()
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
