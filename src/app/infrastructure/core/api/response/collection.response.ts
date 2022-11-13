import { CollectionMetaResponse } from '@infrastructure/core/api/response/collection-meta.response';

export class CollectionResponse<Item> {
  constructor(readonly items: Item[], readonly meta: CollectionMetaResponse) {}
}
