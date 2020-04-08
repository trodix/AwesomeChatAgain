import React, { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Message } from '../components/Message';

export const MessageList: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: 'Item 1', key: '1' },
    { text: 'Item 2', key: '2' },
    { text: 'Item 3', key: '3' },
    { text: 'Item 4', key: '4' },
    { text: 'Item 5', key: '5' },
    { text: 'Item 6', key: '6' },
    { text: 'Item 7', key: '7' },
    { text: 'Item 8', key: '8' }
  ]);
  return (
    <ScrollView>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
      />
    </ScrollView>
  );
};
