import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListModule } from 'primeng/orderlist';
import { OrderListModels } from '@shared/order-list/types/order-list-models';
import { OrderListItemTemplateRef } from '@shared/order-list/types/order-list-item-template-ref';
import { isNil } from '@utils/types/nullable';
import { RequiredInputParameterException } from '@core/exceptions/required-input-parameter-exception';
import { ControlsVisibilityDirective } from '@shared/order-list/directives/controls-visibility.directive';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, OrderListModule, ControlsVisibilityDirective],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent<Model> implements OnInit {
  @Input() data: OrderListModels<Model>;
  @Input() itemTemplateRef: OrderListItemTemplateRef<Model>;
  @Input() controlsVisibility = false;

  ngOnInit(): void {
    this.requireItemTemplateRef();
  }

  private requireItemTemplateRef(): void {
    if (!isNil(this.itemTemplateRef)) {
      return;
    }

    throw new RequiredInputParameterException('itemTemplateRef');
  }
}
