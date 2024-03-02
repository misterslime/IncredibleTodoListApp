import React, { useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View
} from 'react-native';

function ToDoList({tasks}: { tasks: string[] }): React.JSX.Element {
    return (
      <ScrollView>
        {tasks.map((value: string, index: number) => {
          return (
            <Pressable key={index}>
              <View style={[styles.task]}>
                <Text style={styles.taskText}>{value}</Text>
              </View>
            </Pressable>
          );
        })}
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