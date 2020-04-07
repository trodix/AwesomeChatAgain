import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components/Header';
import { CustomList } from './components/CustomList';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <CustomList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  }
});
