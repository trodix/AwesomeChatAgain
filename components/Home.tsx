import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const goHandler = () => {
    if (username && room) {
      Actions.chat({ username, title: `Room ${room}` });
      setUsername('');
      setRoom('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello world ! You are at Home</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Votre pseudo"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          value={room}
          placeholder="Nom de la room"
          onChangeText={(text) => setRoom(text)}
        />
        <TouchableOpacity style={styles.goBtn} onPress={goHandler}>
          <Text style={styles.goBtnText}>Let's chat !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 40,
    paddingHorizontal: 40
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    paddingVertical: 10
  },
  goBtn: {
    backgroundColor: '#64b5f6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8
  },
  goBtnText: {
    color: '#fff',
    fontSize: 18
  }
});
