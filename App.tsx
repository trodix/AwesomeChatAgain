import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chat } from './components/Chat';
import { Header } from './components/Header';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Home } from './components/Home';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Stack>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  }
});

export default App;
