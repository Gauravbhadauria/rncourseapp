import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Animations = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  // x={value:0}
  //x.value=10

  const animatedBoxStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },

          animatedBoxStyle,
        ]}></Animated.View>
      <Button
        title="animate x"
        onPress={() => {
          if (x.value == 100) {
            x.value = withTiming(0, {duration: 500});
          } else {
            x.value = withTiming(100, {duration: 500});
          }
        }}
      />
      <Button
        title="animate y"
        onPress={() => {
          if (y.value == 100) {
            y.value = 0;
          } else {
            y.value = 100;
          }
        }}
      />
    </View>
  );
};

export default Animations;
