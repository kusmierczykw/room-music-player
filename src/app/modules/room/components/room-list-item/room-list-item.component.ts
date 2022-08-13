import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../../room/models/room';

@Component({
  selector: 'app-room-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss'],
})
export class RoomListItemComponent {
  @Input() item!: Room;
}
