import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <Image
        source={require('../../images/user.png')}
        style={{width: 100, height: 100, marginTop: 50}}
      />
      <Text style={{marginTop: 20}}>{'View Profile'}</Text>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image
          source={require('../../images/home.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{marginLeft: 20}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        <Image
          source={require('../../images/settings.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{marginLeft: 20}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Chats');
        }}>
        <Image
          source={require('../../images/chat.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{marginLeft: 20}}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: '90%',
          height: 50,
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('HelpSupport');
        }}>
        <Image
          source={require('../../images/customer-support.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{marginLeft: 20}}>Help & Support</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CustomDrawer;
