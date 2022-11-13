import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListModule } from 'primeng/orderlist';
import { OrderListItemTemplateRef } from '@shared/order-list/type/order-list-item-template-ref';
import { RequiredInputParameterException } from '@core/exception/required-input-parameter-exception';
import { ControlsVisibilityDirective } from '@shared/order-list/directive/controls-visibility.directive';
import { isNullable } from '@util/type/nullable/is-nullable';
import { Nullable } from '@util/type/nullable/nullable';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, OrderListModule, ControlsVisibilityDirective],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent<Model> implements OnInit {
  @Input() data: Nullable<Model[]>;
  @Input() itemTemplateRef: Nullable<OrderListItemTemplateRef<Model>>;
  @Input() controlsVisibility = false;

  ngOnInit(): void {
    this.requireItemTemplateRef();
  }

  private requireItemTemplateRef(): void {
    if (!isNullable(this.itemTemplateRef)) {
      return;
    }

    throw new RequiredInputParameterException('itemTemplateRef');
  }
}
