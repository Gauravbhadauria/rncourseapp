import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenA from './screens/ScreenA';
import ScreenB from './screens/ScreenB';
import ScreenC from './screens/ScreenC';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ScreenA"
          component={ScreenA}
          options={{title: 'Screen A'}}
        />
        <Stack.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen B',
            headerShown: true,
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerBackTitleStyle: {
              fontSize: 20,
            },
            headerBackTitle: 'Back',
          }}
        />
        <Stack.Screen
          name="ScreenC"
          component={ScreenC}
          options={{title: 'Screen C', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

// navigate()
// push()
// replace()
// pop()
