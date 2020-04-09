import {
  JOIN_REQUEST,
  JOIN_SUCCESS,
  FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS
} from '../types';
import { chatService } from '../services';

export const chatActions = {
  join,
  sendMessage
};

function join(user: string, room: string) {
  return (dispatch: Function) => {
    dispatch({ type: JOIN_REQUEST, user, room });
    chatService
      .join(user, room)
      .then((messages: []) => {
        dispatch({ type: JOIN_SUCCESS, messages });
      })
      .catch((error: Error) => {
        dispatch({ type: FAILURE, error });
      });
  };
}

function sendMessage(messageContent: string) {
  return (dispatch: Function) => {
    dispatch({ type: SEND_MESSAGE_REQUEST, messageContent });
    chatService
      .sendMessage(messageContent)
      .then((message) => {
        dispatch({ type: SEND_MESSAGE_SUCCESS, message });
      })
      .catch((error) => {
        dispatch({ type: FAILURE, error });
      });
  };
}
