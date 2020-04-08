import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chat } from './components/Chat';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { Home } from './components/Home';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navTitle}
        sceneStyle={styles.routerScene}>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Stack>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#FF8C00'
  },
  navTitle: {
    color: '#fff'
  },
  routerScene: {},
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  }
});

export default App;
