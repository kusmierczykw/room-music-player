import { CollectionMetaResponse } from '@api/modules/common/responses/collection-meta-response';

export class CollectionResponse<Item> {
  constructor(
    public readonly items: Item[],
    public readonly meta: CollectionMetaResponse,
  ) {}
}
