import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Room } from '../models/room.model';

export const roomAdapter: EntityAdapter<Room> = createEntityAdapter<Room>();
