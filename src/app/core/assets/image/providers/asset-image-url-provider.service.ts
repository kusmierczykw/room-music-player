import { Injectable } from '@angular/core';
import { AssetImage } from '@core/assets/image/enums/asset-image';
import { AssetImageUrl } from '@core/assets/image/types/asset-image-url';

@Injectable({
  providedIn: 'root',
})
export class AssetImageUrlProviderService {
  private readonly assetsImageUrl = './assets/images';
  private readonly images: Record<AssetImage, string> = {
    [AssetImage.ROOM_MUSIC_PLAYER_LOGO]: 'room-music-player-logo.png',
    [AssetImage.MUSIC_PLACEHOLDER]: 'music-placeholder.png',
  };

  url(image: AssetImage): AssetImageUrl {
    const imageName = this.images[image];

    return `${this.assetsImageUrl}/${imageName}`;
  }
}
