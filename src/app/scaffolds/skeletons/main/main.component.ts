import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '@scaffolds/components/navbar/navbar.component';
import { MenubarComponent } from '@shared/menubar/components/menubar/menubar.component';
import { SidebarComponent } from '@scaffolds/components/sidebar/sidebar.component';
import { FooterComponent } from '@scaffolds/components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    MenubarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
