import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { chatActions } from '../actions';

export const ChatActionBar: React.FC = () => {
  const [contentMessage, setContentMessage] = React.useState('');
  const dispatch = useDispatch();

  const sendHandler = () => {
    if (contentMessage.length > 0) {
      dispatch(chatActions.sendMessage(contentMessage));
      console.log('message sent !', contentMessage);
      setContentMessage(''); // clear the TextInput value
    }
  };

  return (
    <View style={styles.actionBarContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.chatInput}
          value={contentMessage}
          placeholder="Votre message"
          onChangeText={(value) => setContentMessage(value)}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendHandler}>
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionBarContainer: {
    paddingVertical: 15,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20
  },
  chatInput: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 0,
    color: '#777',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 5,
    flex: 1
  },
  sendBtn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#64b5f6',
    borderRadius: 50
  },
  sendBtnText: {
    color: '#fff'
  }
});
