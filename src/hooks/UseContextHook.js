import {View, Text, SafeAreaView} from 'react-native';
import React, {createContext} from 'react';
import CompA from '../components/CompA';
export const UserContext = createContext();
const UseContextHook = () => {
  return (
    <UserContext.Provider
      value={{
        name: 'saurav',
        email: 'saurav@gmail.com',
      }}>
      <SafeAreaView>
        <CompA
          user={{
            name: 'gaurav',
            email: 'gaurav@gmail.com',
          }}
        />
      </SafeAreaView>
    </UserContext.Provider>
  );
};

export default UseContextHook;
