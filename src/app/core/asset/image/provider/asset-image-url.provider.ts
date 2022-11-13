import { Injectable } from '@angular/core';
import { AssetImage } from '@core/asset/image/enum/asset-image';
import { AssetImageUrl } from '@core/asset/image/type/asset-image-url';

@Injectable({
  providedIn: 'root',
})
export class AssetImageUrlProvider {
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
