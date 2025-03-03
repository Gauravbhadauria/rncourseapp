import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../hooks/UseContextHook';

const CompC = ({user}) => {
  const newUser = useContext(UserContext);
  return (
    <View>
      <Text>{newUser.name}</Text>
    </View>
  );
};

export default CompC;
