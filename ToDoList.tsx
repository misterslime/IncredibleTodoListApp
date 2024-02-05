import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View
} from 'react-native';

function ToDoList(): React.JSX.Element {
    return (
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Go shopping</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Pet cat</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Sleep</Text>
          </View>
        </Pressable>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
  });
  
  export default ToDoList;