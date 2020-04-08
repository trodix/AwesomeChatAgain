import React from 'react';
import { View, Text } from 'react-native';

type message = {
  text: string;
};

type MessageProps = {
  message: message;
};

export const Message: React.FC<MessageProps> = ({ message }: MessageProps) => {
  return (
    <View>
      <Text style={styles.message}>{message.text}</Text>
    </View>
  );
};

const styles = {
  message: {
    backgroundColor: '#eee',
    margin: 8,
    paddingVertical: 20,
    paddingHorizontal: 10
  }
};
