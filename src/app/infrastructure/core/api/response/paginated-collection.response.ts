import { PaginatedCollectionMetaResponse } from './paginated-collection-meta.response';

export class PaginatedCollectionResponse<Item> {
  constructor(
    readonly items: Item[],
    readonly meta: PaginatedCollectionMetaResponse,
  ) {}
}
