import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigationState, useRoute} from '@react-navigation/native';

const ScreenB = ({navigation}) => {
  const route = useRoute();
  const states = useNavigationState(state => state.routes.length);
  console.log(states);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ScreenB </Text>
      <Button
        title="go to C "
        onPress={() => {
          navigation.navigate('ScreenC');
        }}
      />
      <Button
        title="go  back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default ScreenB;
