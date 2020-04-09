import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { Chat } from './screens/Chat';
import { Home } from './screens/Home';

const store = createStore(rootReducer, applyMiddleware(thunk));

export const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
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
