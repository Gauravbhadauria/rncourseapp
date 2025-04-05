import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const InterpolateDemo = () => {
  const x = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value,
      [0, 50, 100],
      [1, 0.5, 0],
      Extrapolation.CLAMP,
    );
    const height = interpolate(
      x.value,
      [0, 50, 100],
      [100, 50, 20],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateX: x.value}],
      opacity,
      height,
    };
  });
  return (
    <View
      style={{
        flex: 1,
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'red'},
          animatedStyle,
        ]}></Animated.View>
      <Button
        title="start transition"
        onPress={() => {
          if (x.value == 100) {
            x.value = withTiming(0, {duration: 1000});
          } else {
            x.value = withTiming(100, {duration: 1000});
          }
        }}
      />
    </View>
  );
};

export default InterpolateDemo;
