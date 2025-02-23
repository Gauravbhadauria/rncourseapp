import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Search from './tabs/Search';
import AddPost from './tabs/AddPost';
import Favorites from './tabs/Favorites';
import Profile from './tabs/Profile';
import CustomBottomTabs from './CustomBottomTabs';
const Bottom = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 90,
        },
      }}
      tabBar={props => <CustomBottomTabs {...props} />}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../images/home.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../images/search.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../images/more.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
                source={require('../../images/fav.png')}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <Image
                style={{width: size, height: size, tintColor: color}}
                source={require('../../images/user2.png')}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabNavigator;
