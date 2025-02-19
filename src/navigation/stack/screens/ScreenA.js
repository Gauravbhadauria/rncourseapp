import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ScreenA = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Screen B"
        onPress={() => {
          navigation.navigate('ScreenB', {
            user: {
              name: 'gaurav',
              email: 'gaurav@gmail.com',
            },
          });
        }}
      />
    </View>
  );
};

export default ScreenA;
