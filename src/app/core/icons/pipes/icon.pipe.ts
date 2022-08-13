import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '@core/icons/enums/icon';
import { IconProviderService } from '@core/icons/providers/icon-provider.service';

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
