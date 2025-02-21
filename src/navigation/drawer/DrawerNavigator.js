import {View, Text, Image} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Chats from './screens/Chats';
import HelpSupport from './screens/HelpSupport';
import CustomDrawer from './CustomDrawer';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: '#f2f2f2',
          drawerStyle: {
            backgroundColor: 'orange',
          },
          drawerActiveTintColor: 'red',
          drawerInactiveTintColor: 'white',
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white',
                  }}
                  source={require('../../images/home.png')}
                />
              );
            },
            drawerLabel: ({size, color}) => {
              return <Text style={{color: color, fontSize: 18}}>{'Home'}</Text>;
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white',
                  }}
                  source={require('../../images/settings.png')}
                />
              );
            },
            drawerLabel: ({size, color}) => {
              return (
                <Text style={{color: color, fontSize: 18}}>{'Settings'}</Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="Chats"
          component={Chats}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white',
                  }}
                  source={require('../../images/chat.png')}
                />
              );
            },
            drawerLabel: ({size, color}) => {
              return (
                <Text style={{color: color, fontSize: 18}}>{'My Chats'}</Text>
              );
            },
          }}
        />
        <Drawer.Screen
          name="HelpSupport"
          component={HelpSupport}
          options={{
            drawerIcon: ({size, focused}) => {
              return (
                <Image
                  style={{
                    width: size,
                    height: size,
                    tintColor: focused ? 'blue' : 'white',
                  }}
                  source={require('../../images/customer-support.png')}
                />
              );
            },
            drawerLabel: ({size, color}) => {
              return (
                <Text style={{color: color, fontSize: 18}}>
                  {'Help & Support'}
                </Text>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
