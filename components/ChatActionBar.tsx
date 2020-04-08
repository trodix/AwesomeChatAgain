import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export const ChatActionBar: React.FC = () => {
  const [value, onChangeText] = React.useState('');

  const sendHandler = () => {
    sendMessage();
  };

  const sendMessage = () => {
    console.log('message sent !');
  };

  return (
    <View style={styles.actionBarContainer}>
      <TextInput
        style={styles.chatInput}
        value={value}
        placeholder="Votre message"
        onChangeText={(text) => onChangeText(text)}
      />
      <Button title="Envoyer" onPress={sendHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionBarContainer: {
    paddingVertical: 15,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  chatInput: {
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 0,
    color: '#777',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 15,
    flex: 1
  }
});
