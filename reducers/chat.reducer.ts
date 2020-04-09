import {
  JOIN_REQUEST,
  JOIN_SUCCESS,
  FAILURE,
  State,
  ChatActionTypes,
  Message,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_REQUEST
} from '../types';

const initialState: State = {
  messages: [],
  user: '',
  room: '',
  error: undefined
};

export const chat = (state = initialState, action: ChatActionTypes): State => {
  switch (action.type) {
    case JOIN_REQUEST:
      return {
        ...state,
        user: action.user,
        room: action.room
      };
    case JOIN_SUCCESS:
      return {
        ...state,
        messages: (action.messages as unknown) as Message[]
      };
    case FAILURE:
      return {
        ...state,
        error: action.error
      };
    // case SEND_MESSAGE_REQUEST:
    //   return { };
    case SEND_MESSAGE_SUCCESS:
      console.log(action.message);
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
  }

  return state;
};
