import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
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