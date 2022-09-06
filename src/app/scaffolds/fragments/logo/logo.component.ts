import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetImageUrlPipe } from '@core/assets/image/pipes/asset-image-url.pipe';
import { AssetImage } from '@core/assets/image/enums/asset-image';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, AssetImageUrlPipe],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  readonly ROOM_MUSIC_PLAYER_LOGO = AssetImage.ROOM_MUSIC_PLAYER_LOGO;
}
