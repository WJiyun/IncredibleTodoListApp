import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f9c2ff',
  },
  completed: {
    backgroundColor: '#d3d3d3',
  },
  taskText: {
    fontSize: 18,
  },
});

export default ToDoList;