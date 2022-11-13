import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPipe } from '@core/../../application/asset/icon/pipe/icon.pipe';
import { Icon } from '@core/../../application/asset/icon/enum/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule, IconPipe],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon!: Icon;
  @Input() size = '1rem';
}
