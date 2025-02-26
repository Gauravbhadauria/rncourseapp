import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHookDemo = () => {
  const [bgColor, setBgColor] = useState('cyan');
  const [user, setUser] = useState({
    name: 'gaurav',
    email: 'gaurav@gmail.com',
    age: 29,
  });
  const [data, setData] = useState([]);
  const [switchOn, setSwitchOn] = useState(false);
  console.log(bgColor);
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, {backgroundColor: bgColor}]}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.age}</Text>
        <Text>{switchOn ? 'On' : 'Off'}</Text>
      </View>
      <Button
        title="Change Box Color"
        onPress={() => {
          //   setUser({
          //     ...user,
          //     age: user.age + 1,
          //   });
          setSwitchOn(false);
        }}
      />
    </SafeAreaView>
  );
};

export default UseStateHookDemo;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 50,
  },
});
