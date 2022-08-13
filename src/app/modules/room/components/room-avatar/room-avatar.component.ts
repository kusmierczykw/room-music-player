import { Component, Input } from '@angular/core';
import { AssetImage } from '@core/assets/image/enums/asset-image';
import { AssetImageUrlPipe } from '@core/assets/image/pipes/asset-image-url.pipe';

@Component({
  selector: 'app-room-avatar',
  standalone: true,
  templateUrl: './room-avatar.component.html',
  styleUrls: ['./room-avatar.component.scss'],
  imports: [AssetImageUrlPipe],
})
export class RoomAvatarComponent {
  @Input() size = '20rem';

  readonly AssetImage = AssetImage;
}
