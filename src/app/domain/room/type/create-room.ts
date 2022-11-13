import { RoomProperties } from '@domain/room/type/room-properties';

export type CreateRoom = Omit<RoomProperties, 'id'>;
