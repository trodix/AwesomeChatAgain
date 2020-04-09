import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageList } from '../components/MessageList';
import { ChatActionBar } from '../components/ChatActionBar';

export const Chat: React.FC = () => {
  return (
    <View style={styles.chatContainer}>
      <MessageList />
      <ChatActionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1
  }
});

// const MessageListTmp = [
//   {
//     text: 'Mon super message 1',
//     author: 'Robert',
//     timestamp: new Date(),
//     key: '1'
//   },
//   {
//     text: 'Mon super message 2',
//     author: 'Robert',
//     timestamp: new Date(),
//     key: '3'
//   },
//   {
//     text: 'Mon super message 3',
//     author: 'trodix',
//     timestamp: new Date(),
//     key: '6'
//   },
//   {
//     text: 'Mon super message 4',
//     author: 'Marcel',
//     timestamp: new Date(),
//     key: '4'
//   },
//   {
//     text: 'Mon super message 5',
//     author: 'trodix',
//     timestamp: new Date(),
//     key: '7'
//   },
//   {
//     text: 'Mon super message 6',
//     author: 'Marcel',
//     timestamp: new Date(),
//     key: '5'
//   },
//   {
//     text: 'Mon super message 7',
//     author: 'Robert',
//     timestamp: new Date(),
//     key: '2'
//   },
//   {
//     text: 'Mon super message 8',
//     author: 'trodix',
//     timestamp: new Date(),
//     key: '8'
//   }
// ];
