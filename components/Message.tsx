import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

type message = {
  text: string;
  author: string;
  timestamp: Date;
  key: string;
};

type MessageProps = {
  message: message;
  style: string;
};

export const Message: React.FC<MessageProps> = ({
  message,
  style
}: MessageProps) => {
  const isAuthor: boolean = style === 'me';
  return (
    <View
      style={[
        styles.message,
        { alignSelf: isAuthor ? 'flex-end' : 'flex-start' },
        { backgroundColor: isAuthor ? '#eee' : '#64b5f6' },
        isAuthor
          ? { borderBottomRightRadius: 0 }
          : { borderBottomLeftRadius: 0 }
      ]}>
      <Text style={[{ color: isAuthor ? 'black' : 'white' }]}>
        {message.author}, {moment(message.timestamp).fromNow()}
      </Text>
      <Text style={[{ color: isAuthor ? 'black' : 'white' }]}>
        {message.text}
      </Text>
    </View>
  );
};

const styles = {
  message: {
    flex: 1,
    margin: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '80%'
  }
  // me: {
  //   backgroundColor: '#eee',
  //   alignSelf: 'flex-end',
  //   color: 'black',
  //   borderBottomLeftRadius: 0
  // },
  // other: {
  //   backgroundColor: '#64b5f6',
  //   alignSelf: 'flex-start',
  //   color: 'white',
  //   borderBottomRightRadius: 0
  // }
};
