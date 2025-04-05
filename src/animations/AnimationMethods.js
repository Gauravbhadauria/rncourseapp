import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimationMethods = () => {
  const animation = useSharedValue(0);

  const animtedStyled = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
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
          animtedStyled,
        ]}></Animated.View>
      <Button
        title="use WithTiming"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withTiming(0, {duration: 500});
          } else {
            animation.value = withTiming(100, {duration: 500});
          }
        }}
      />
      <Button
        title="use WithSpring"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withSpring(0);
          } else {
            animation.value = withSpring(100);
          }
        }}
      />
      <Button
        title="use with delay"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withDelay(500, withSpring(0));
          } else {
            animation.value = withDelay(500, withSpring(100));
          }
        }}
      />
      <Button
        title="use with repeat"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withRepeat(
              withTiming(0, {duration: 500}),
              0,
              false,
            );
          } else {
            animation.value = withRepeat(
              withTiming(100, {duration: 500}),
              -1,
              true,
            );
          }
        }}
      />
      <Button
        title="use with sequence"
        onPress={() => {
          if (animation.value == 100) {
            animation.value = withSequence(
              withTiming(90, {duration: 500}),
              withTiming(70, {duration: 1000}),
              withTiming(50, {duration: 500}),
              withTiming(30, {duration: 1000}),
              withTiming(0, {duration: 300}),
            );
          } else {
            animation.value = withSequence(
              withTiming(30, {duration: 500}),
              withTiming(50, {duration: 1000}),
              withTiming(70, {duration: 500}),
              withTiming(90, {duration: 1000}),
              withTiming(100, {duration: 300}),
            );
          }
        }}
      />
    </View>
  );
};

export default AnimationMethods;
