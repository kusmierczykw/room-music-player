import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RoomListComponent } from '../../../room/components/room-list/room-list.component';
import { RoomListProviderService } from '../../../room/providers/room-list-provider.service';
import { Room } from '../../../room/models/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-list-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, RoomListComponent],
  templateUrl: './room-list-page.component.html',
  styleUrls: ['./room-list-page.component.scss'],
})
export class RoomListPageComponent {
  public readonly roomList$: Observable<Room[]>;

  constructor(private readonly roomListProvider: RoomListProviderService) {
    this.roomList$ = this.roomListProvider.roomList();
  }

  handleAddClick(): void {}
}
