import React from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';

const topics = [
  '📌 What are Hooks in React Native?',
  '📌 Why were Hooks introduced?',
  '📌 Rules of Hooks',
  '📌 Class Components vs Functional Components',
  '📌 useState Hook with Example',
  '📌 Common Mistakes with Hooks',
  '📌 Real-world Use Cases of Hooks',
  '📌 Next Steps in Learning Hooks',
];

const HooksIntro = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Hooks - Discussion Topics</Text>
      <FlatList
        data={topics}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.point}>{item}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  point: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default HooksIntro;

// state ,side effects
//react 16.8
