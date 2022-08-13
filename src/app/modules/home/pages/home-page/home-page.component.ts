import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomTileComponent } from '@modules/room/components/room-tile/room-tile.component';
import { Observable } from 'rxjs';
import { RoomCollectionItemResponse } from '@api/modules/room/responses/room-collection-item-response';
import { RoomListProviderService } from '@modules/room/providers/room-list-provider.service';
import { ContextMenuModule } from 'primeng/contextmenu';
import { RouterLinkPipe } from '@routing/pipes/router-link.pipe';
import { RoomDetailsRouterLinkPipe } from '@modules/room/pipes/room-details-router-link.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RoomTileComponent,
    ContextMenuModule,
    RouterLinkPipe,
    RoomDetailsRouterLinkPipe,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  readonly rooms$: Observable<RoomCollectionItemResponse[]>;

  constructor(private readonly roomListProvider: RoomListProviderService) {
    this.rooms$ = this.roomListProvider.roomList();
  }
}
