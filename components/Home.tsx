import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export const Home: React.FC = () => {
  const goHandler = () => {
    Actions.chat();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Hello world ! You are at Home</Text>
      <Button title="Go to chat" onPress={goHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
