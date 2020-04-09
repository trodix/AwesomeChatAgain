import React from 'react';
import { FlatList } from 'react-native';
import { Message } from './Message';
import { Message as MessageType } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export const MessageList: React.FC = () => {
  const user: string = useSelector((state: RootState) => state.chat.user);
  // const error: any = useSelector((state: RootState) => state.chat.error);
  const messages: MessageType[] = useSelector(
    (state: RootState) => state.chat.messages
  );
  // console.log(messages);

  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <Message message={item} style={item.author === user ? 'me' : 'other'} />
      )}
    />
  );
};
