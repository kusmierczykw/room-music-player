import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@scaffolds/fragments/navbar/navbar.component';
import { MenubarComponent } from '@shared/menubar/components/menubar/menubar.component';
import { SidebarComponent } from '@scaffolds/fragments/sidebar/sidebar.component';
import { FooterComponent } from '@scaffolds/fragments/footer/footer.component';

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
export class MainScaffoldComponent {}
