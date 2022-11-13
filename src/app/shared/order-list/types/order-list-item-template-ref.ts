import { Nil } from '@utils/types/nullable';
import { TemplateRef } from '@angular/core';
import { OrderListItemTemplate } from '@shared/order-list/interfaces/order-list-item-template';

export type OrderListItemTemplateRef<Model> = Nil<
  TemplateRef<OrderListItemTemplate<Model>>
>;
