import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './CommonStyles';

const CommonStylesDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StylesheetStyles</Text>
      <Text style={styles.text}>Demo</Text>
    </View>
  );
};

export default CommonStylesDemo;
