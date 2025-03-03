import {View, Text} from 'react-native';
import React from 'react';
import CompC from './CompC';

const CompB = ({user}) => {
  return (
    <View>
      <Text>{user.nam}</Text>
      <CompC user={user} />
    </View>
  );
};

export default CompB;
