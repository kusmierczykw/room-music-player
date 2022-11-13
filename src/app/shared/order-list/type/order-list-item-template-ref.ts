import { TemplateRef } from '@angular/core';

export type OrderListItemTemplateRef<Model> = TemplateRef<{
  item: Model;
}>;
