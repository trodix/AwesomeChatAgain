import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>AwesomeChat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#FF8C00'
  },
  title: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
