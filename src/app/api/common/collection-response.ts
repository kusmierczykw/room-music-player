import { CollectionMetaResponse } from './collection-meta-response';

export class CollectionResponse<Item> {
  constructor(readonly items: Item[], readonly meta: CollectionMetaResponse) {}
}
