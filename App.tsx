import React from 'react';
import './global.css';

import {SafeAreaView, Text} from 'react-native';
const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-red-500">
      <Text className="text-white text-xl font-bold">Hello Tailwind</Text>
    </SafeAreaView>
  );
};

export default App;
