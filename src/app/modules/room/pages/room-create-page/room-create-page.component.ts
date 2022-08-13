import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-room-create-page',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './room-create-page.component.html',
  styleUrls: ['./room-create-page.component.scss'],
})
export class RoomCreatePageComponent {
  handleSubmit(event: MouseEvent) {}
}
