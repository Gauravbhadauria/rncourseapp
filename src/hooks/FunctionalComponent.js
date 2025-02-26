import {View, Text} from 'react-native';
import React, {useState} from 'react';
const counter=0
const FunctionalComponent = () => {
//   const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text
        onPress={() => {
         counter=counter+1
        }}>
        add counter
      </Text>
    </View>
  );
};

export default FunctionalComponent;
