import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MessageList } from '../components/MessageList';
import { ChatActionBar } from '../components/ChatActionBar';

type chatProps = {
  username: string;
  room: string;
};

export const Chat: React.FC<chatProps> = ({ username }) => {
  return (
    <View style={styles.chatContainer}>
      <MessageList username={username} />
      <ChatActionBar />
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1
  }
});
