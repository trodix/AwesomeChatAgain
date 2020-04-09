import { JOIN_REQUEST, ChatActionTypes } from '../types';

export const chatActions = {
  join
};

function join(user: string, room: string): ChatActionTypes {
  return { type: JOIN_REQUEST, user, room };
}
