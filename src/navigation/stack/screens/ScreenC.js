import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigationState, useRoute} from '@react-navigation/native';

const ScreenC = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="go  back"
        onPress={() => {
          navigation.pop(1);
        }}
      />
    </View>
  );
};

export default ScreenC;
