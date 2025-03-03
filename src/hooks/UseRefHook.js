import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const previousRef = useRef(0);
  const inputRef = useRef(null);
  console.log(inputRef);
  const inputRef2 = useRef(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    previousRef.current = count;
  }, [count]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>{`current count:${count}`}</Text>
      <Text
        style={{fontSize: 30}}>{`previous count:${previousRef.current}`}</Text>

      <Text
        style={{fontSize: 30}}
        onPress={() => {
          setCount(count + 1);
        }}>
        Increase Count
      </Text>
      <TextInput
        ref={inputRef}
        style={{width: '90%', height: 50, borderWidth: 1, marginTop: 20}}
      />
      <TextInput
        ref={inputRef2}
        style={{width: '90%', height: 50, borderWidth: 1, marginTop: 20}}
      />
      <Button
        onPress={() => {
          inputRef2.current.focus();
        }}
        title="Focus Input"
      />

      <Text style={{fontSize: 30}}>{`timer:${timer}`}</Text>
      <Button
        onPress={() => {
          clearInterval(intervalRef.current);
        }}
        title="Stop Timer "
      />
    </View>
  );
};

export default UseRefHook;
