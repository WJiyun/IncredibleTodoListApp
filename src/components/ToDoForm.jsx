import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm() {

  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput 
      style={styles.input} 
      placeholder="Add a new task..." 
      onChangeText={(text) => setTaskText(text)}
      value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    padding: 5,
  },
});

export default ToDoForm;