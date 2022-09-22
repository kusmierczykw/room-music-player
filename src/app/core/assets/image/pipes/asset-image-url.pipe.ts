import { Pipe, PipeTransform } from '@angular/core';
import { AssetImage } from '@core/assets/image/enums/asset-image';
import { AssetImageUrl } from '@core/assets/image/types/asset-image-url';
import { AssetImageUrlProviderService } from '@core/assets/image/providers/asset-image-url-provider.service';

@Pipe({
  name: 'assetImageUrl',
  standalone: true,
})
export class AssetImageUrlPipe implements PipeTransform {
  constructor(
    private readonly imageUrlProvider: AssetImageUrlProviderService,
  ) {}

  transform(image: AssetImage): AssetImageUrl {
    return this.imageUrlProvider.url(image);
  }
}
