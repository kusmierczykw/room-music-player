import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomDetailsRouterLinkPipe } from '@modules/room/pipes/room-details-router-link.pipe';
import { Uuid } from '@core/uuid/types/uuid';

@Component({
  selector: 'app-room-tile-router-link',
  standalone: true,
  imports: [CommonModule, RouterModule, RoomDetailsRouterLinkPipe],
  templateUrl: './room-tile-router-link.component.html',
  styleUrls: ['./room-tile-router-link.component.scss'],
})
export class RoomTileRouterLinkComponent {
  @Input() id!: Uuid;
}
