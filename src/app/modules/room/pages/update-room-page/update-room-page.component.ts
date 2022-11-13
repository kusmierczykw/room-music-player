import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeNameRoomFormComponent } from '@modules/room/components/change-name-room-form/change-name-room-form.component';

@Component({
  selector: 'app-update-room-page',
  standalone: true,
  imports: [CommonModule, ChangeNameRoomFormComponent],
  templateUrl: './update-room-page.component.html',
  styleUrls: ['./update-room-page.component.scss'],
})
export class UpdateRoomPageComponent {}
