import { EntityState } from '@ngrx/entity';
import { Room } from '../models/room.model';
import { roomAdapter } from '../adapters/room.adapter';

export interface RoomState extends EntityState<Room> {
  loaded: boolean;
}

export const roomInitialState: RoomState = roomAdapter.getInitialState({
  loaded: false,
  ids: [
    '10567cd6-6403-4f17-83f3-1b5b7d901a57',
    '4789a521-ecb1-463b-b7ce-04cfff357dd0',
  ],
  entities: {
    '4789a521-ecb1-463b-b7ce-04cfff357dd0': {
      id: '4789a521-ecb1-463b-b7ce-04cfff357dd0',
      label: 'Ten lepszy pokój',
    },
    '10567cd6-6403-4f17-83f3-1b5b7d901a57': {
      id: '10567cd6-6403-4f17-83f3-1b5b7d901a57',
      label: 'Pokój u Darka',
    },
  },
});
