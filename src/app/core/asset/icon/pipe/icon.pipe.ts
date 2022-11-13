import { Pipe, PipeTransform } from '@angular/core';
import { Icon } from '@core/asset/icon/enum/icon';
import { IconProvider } from '@core/asset/icon/provider/icon.provider';

@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  constructor(private readonly iconProvider: IconProvider) {}

  transform(icon: Icon): string {
    return this.iconProvider.icon(icon);
  }
}
