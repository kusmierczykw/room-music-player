import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { IconComponent } from '@shared/icon/icon.component';
import { SharedModule } from 'primeng/api';
import { Icon } from '@core/asset/icon/enum/icon';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    SharedModule,
    IconComponent,
  ],
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss'],
})
export class ToggleButtonComponent {
  @Input() checked = false;
  @Input() tooltipDisabled = false;
  @Input() checkedLabel = '';
  @Input() uncheckedLabel = '';
  @Input() checkedIcon: Icon = Icon.HEART_FILL;
  @Input() uncheckedIcon: Icon = Icon.HEART;

  @Output() readonly toggleEvent = new EventEmitter<boolean>();

  handleClick(): void {
    this.notifyToggleEvent(!this.checked);
  }

  private notifyToggleEvent(newValue: boolean): void {
    this.toggleEvent.emit(newValue);
  }
}
