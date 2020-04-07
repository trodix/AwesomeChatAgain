import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export function CustomList() {
  const [todos, setTodos] = useState([
    { text: 'Item 1', key: 1 },
    { text: 'Item 2', key: 2 }
  ]);

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />
    </View>
  );
}
