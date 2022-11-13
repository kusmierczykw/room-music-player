import { Pipe, PipeTransform } from '@angular/core';
import { AssetImage } from '@core/asset/image/enum/asset-image';
import { AssetImageUrl } from '@core/asset/image/type/asset-image-url';
import { AssetImageUrlProvider } from '@core/asset/image/provider/asset-image-url.provider';

@Pipe({
  name: 'assetImageUrl',
  standalone: true,
})
export class AssetImageUrlPipe implements PipeTransform {
  constructor(private readonly imageUrlProvider: AssetImageUrlProvider) {}

  transform(image: AssetImage): AssetImageUrl {
    return this.imageUrlProvider.url(image);
  }
}
