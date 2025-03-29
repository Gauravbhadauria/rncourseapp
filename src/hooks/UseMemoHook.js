import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import React, {useMemo, useState} from 'react';

const UseMemoHook = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const calculateValue = x => {
    Alert.alert('Expensive calculation running...');
    return x * 30;
  };

  const calculatedValue = useMemo(() => calculateValue(counter2), [counter2]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 35}}>With useMemo</Text>
      <Text style={{fontSize: 20}}>Counter 1: {counter}</Text>
      <Text style={{fontSize: 20}}>Counter 2: {counter2}</Text>
      <Text style={{fontSize: 20}}>Calculated Value: {calculatedValue}</Text>

      <Button
        title="Increment Counter 1"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Increment Counter 2"
        onPress={() => setCounter2(counter2 + 1)}
      />
    </SafeAreaView>
  );
};

export default UseMemoHook;
