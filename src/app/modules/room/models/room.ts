import { Uuid } from '@core/uuid/types/uuid';

export class Room {
  constructor(public readonly id: Uuid, public readonly name: string) {}
}
