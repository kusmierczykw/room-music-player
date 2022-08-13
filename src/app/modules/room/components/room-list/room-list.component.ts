import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '@shared/order-list/components/order-list/order-list.component';
import { RoomListItemComponent } from '@modules/room/components/room-list-item/room-list-item.component';
import { Room } from '@modules/room/models/room';
import { Nil } from '@utils/types/nil';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, OrderListComponent, RoomListItemComponent],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent {
  @Input() rooms: Nil<Room[]>;
}
