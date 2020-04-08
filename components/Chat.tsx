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
