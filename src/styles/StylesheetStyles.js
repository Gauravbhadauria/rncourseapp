import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StylesheetStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StylesheetStyles</Text>
      <Text style={styles.text}>Demo</Text>
    </View>
  );
};

export default StylesheetStyles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});
