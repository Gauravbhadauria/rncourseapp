import React, {Component} from 'react';
import {Alert, SafeAreaView, Text} from 'react-native';
import MyButton from './MyButton';

class ClassComponent extends Component {
  render() {
    return (
      <SafeAreaView>
        <MyButton
          title={'Click Me class'}
          onPress={() => {
            Alert.alert('Hello class');
          }}
        />
      </SafeAreaView>
    );
  }
}

export default ClassComponent;

//legacy

const element = React.createElement(Text, null, 'Hello');
