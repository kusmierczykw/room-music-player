import { CollectionMetaResponse } from '@api/common/responses/collection-meta-response';

export class CollectionResponse<Item> {
  constructor(
    public readonly items: Item[],
    public readonly meta: CollectionMetaResponse,
  ) {}
}
