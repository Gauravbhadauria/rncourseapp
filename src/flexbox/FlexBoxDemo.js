import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
const data = [
  'small text',
  'medium text length',
  'short',
  'very very long text ',
  'demo text',
  'demo flex wrap text list',
];

const FlexBoxDemo = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        {data.map(item => {
          return (
            <View style={{backgroundColor: 'orange', padding: 10, margin: 10}}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default FlexBoxDemo;

//flexDirection
// justifyContent -- align child components    column(top to bottom) same direction
//alignItems  -- align child components
//alignSelf   -- align self
//flexWrap   -- child align
