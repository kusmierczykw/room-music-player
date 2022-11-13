export class PaginatedCollectionMetaResponse {
  constructor(
    readonly page: number,
    readonly limit: number,
    readonly total: number,
  ) {}
}
