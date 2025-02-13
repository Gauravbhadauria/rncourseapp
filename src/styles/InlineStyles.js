import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const InlineStyles = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 40}}>InlineStyles Demo</Text>
    </SafeAreaView>
  );
};

export default InlineStyles;
