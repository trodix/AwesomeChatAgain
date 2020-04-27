import {
  JOIN_REQUEST,
  JOIN_SUCCESS,
  FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SYNC_SUCCESS,
  Message
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
      .join(
        user,
        room,
        (messages: []) => dispatch(syncSuccess(messages)),
        (error: any) => dispatch(syncError(error))
      )
      .then((messages: []) => {
        dispatch({ type: JOIN_SUCCESS, messages });
      })
      .catch((err: any) => {
        dispatch({ type: FAILURE, err });
      });
  };
}

function sendMessage(messageContent: string) {
  return (dispatch: Function) => {
    dispatch({ type: SEND_MESSAGE_REQUEST, messageContent });
    chatService
      .sendMessage(messageContent)
      .then((message: Message) => {
        dispatch({ type: SEND_MESSAGE_SUCCESS, message });
      })
      .catch((error: Error) => {
        dispatch({ type: FAILURE, error });
      });
  };
}

function syncSuccess(messages: []) {
  return { type: SYNC_SUCCESS, messages };
}

function syncError(error: any) {
  return { type: FAILURE, error };
}
