import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm() {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a task" />
      <Button title="Add" onPress={() => {}} />
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