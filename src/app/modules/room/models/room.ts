import { Uuid } from '@core/uuid/types/uuid';

export class Room {
  constructor(readonly id: Uuid, readonly name: string) {}
}
