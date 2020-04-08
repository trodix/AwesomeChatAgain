import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Message } from './Message';

type MessageListProps = {
  username: string;
};

export const MessageList: React.FC<MessageListProps> = ({ username }) => {
  const [messages, setMessages] = useState([
    {
      text: 'Mon super message 1',
      author: 'Robert',
      timestamp: new Date(),
      key: '1'
    },
    {
      text: 'Mon super message 2',
      author: 'Robert',
      timestamp: new Date(),
      key: '3'
    },
    {
      text: 'Mon super message 3',
      author: 'trodix',
      timestamp: new Date(),
      key: '6'
    },
    {
      text: 'Mon super message 4',
      author: 'Marcel',
      timestamp: new Date(),
      key: '4'
    },
    {
      text: 'Mon super message 5',
      author: 'trodix',
      timestamp: new Date(),
      key: '7'
    },
    {
      text: 'Mon super message 6',
      author: 'Marcel',
      timestamp: new Date(),
      key: '5'
    },
    {
      text: 'Mon super message 7',
      author: 'Robert',
      timestamp: new Date(),
      key: '2'
    },
    {
      text: 'Mon super message 8',
      author: 'trodix',
      timestamp: new Date(),
      key: '8'
    }
  ]);

  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <Message
          message={item}
          style={item.author === username ? 'me' : 'other'}
        />
      )}
    />
  );
};
