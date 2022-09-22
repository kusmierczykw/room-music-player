import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '@core/assets/icons/enums/icon';
import { IconProviderService } from '@core/assets/icons/providers/icon-provider.service';

@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  constructor(private readonly iconProvider: IconProviderService) {}

  transform(icon: Icon): string {
    return this.iconProvider.icon(icon);
  }
}
