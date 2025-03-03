import {View, Text} from 'react-native';
import React from 'react';
import CompB from './CompB';

const CompA = ({user}) => {
  return (
    <View>
      <Text>{user.name}</Text>
      <CompB user={user} />
    </View>
  );
};

export default CompA;
