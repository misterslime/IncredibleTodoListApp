import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

function ToDoForm({ addTask = (task: string) => {} }): React.JSX.Element {

  const [taskText, setTaskText] = React.useState('');

  return (
      <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
        />
        <Button title="Add" onPress={() => addTask(taskText)} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
  });
  
  export default ToDoForm;