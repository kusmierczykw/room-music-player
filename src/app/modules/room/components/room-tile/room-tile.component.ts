import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImage } from '@core/assets/image/enums/asset-image';
import { AssetImageUrlPipe } from '@core/assets/image/pipes/asset-image-url.pipe';
import { RoomAvatarComponent } from '@modules/room/components/room-avatar/room-avatar.component';

@Component({
  selector: 'app-room-tile',
  standalone: true,
  imports: [CommonModule, AssetImageUrlPipe, RoomAvatarComponent],
  templateUrl: './room-tile.component.html',
  styleUrls: ['./room-tile.component.scss'],
})
export class RoomTileComponent {
  @Input() name!: string;

  readonly AssetImage = AssetImage;
}
