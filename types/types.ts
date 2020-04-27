export const JOIN_REQUEST = 'JOIN_REQUEST';
export const JOIN_SUCCESS = 'JOIN_SUCCESS';
export const FAILURE = 'FAILURE';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SYNC_SUCCESS = 'SYNC_SUCCESS';

interface JoinRequestAction {
  type: typeof JOIN_REQUEST;
  user: string;
  room: string;
}

interface JoinSuccessAction {
  type: typeof JOIN_SUCCESS;
  messages: Message[];
}

interface FailureAction {
  type: typeof FAILURE;
  error: Error | string;
}

interface SendMessageRequestAction {
  type: typeof SEND_MESSAGE_REQUEST;
  message: Message;
}

export interface syncSuccessAction {
  type: typeof SYNC_SUCCESS;
  messages: Message[];
}

interface SendMessageSuccessAction {
  type: typeof SEND_MESSAGE_SUCCESS;
  message: Message;
}

export interface Message {
  key?: number | string;
  content: string;
  author: string;
  created_at: Date;
}

export interface State {
  messages: Message[];
  user: string;
  room: string;
  error?: Error | string;
}

export type ChatActionTypes =
  | JoinRequestAction
  | JoinSuccessAction
  | FailureAction
  | SendMessageRequestAction
  | SendMessageSuccessAction
  | syncSuccessAction;
