import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconPipe } from '@core/assets/icons/pipes/icon.pipe';
import { Icon } from '@core/assets/icons/enums/icon';

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
