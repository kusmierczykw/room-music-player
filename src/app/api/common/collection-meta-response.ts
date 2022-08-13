export class CollectionMetaResponse {
  constructor(
    readonly page: number,
    readonly limit: number,
    readonly total: number,
  ) {}
}
