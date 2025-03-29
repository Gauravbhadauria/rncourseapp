import {View, Text, Button} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Transforms = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const rotate = useSharedValue('0deg');
  const scale = useSharedValue(1);
  const skewX = useSharedValue('0deg');

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
        {rotate: rotate.value},
        {scale: scale.value},
        {skewY: skewX.value},
      ],
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
      }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          boxStyle,
        ]}></Animated.View>
      <Button
        title="start moving left and right"
        onPress={() => {
          if (translateX.value == 100) {
            translateX.value = withTiming(0, {duration: 500});
          } else {
            translateX.value = withTiming(100, {duration: 500});
          }
        }}
      />
      <Button
        title="start moving Up and down"
        onPress={() => {
          if (translateY.value == 100) {
            translateY.value = withTiming(0, {duration: 500});
          } else {
            translateY.value = withTiming(100, {duration: 500});
          }
        }}
      />
      <Button
        title="start rotating"
        onPress={() => {
          if (rotate.value == '180deg') {
            rotate.value = withTiming('0deg', {duration: 500});
          } else {
            rotate.value = withTiming('180deg', {duration: 500});
          }
        }}
      />
      <Button
        title="start scalling"
        onPress={() => {
          if (scale.value == 3) {
            scale.value = withSpring(1);
          } else {
            scale.value = withSpring(3);
          }
        }}
      />
      <Button
        title="start skewing X"
        onPress={() => {
          if (skewX.value == '0deg') {
            skewX.value = withTiming('45deg', {duration: 500});
          } else {
            skewX.value = withTiming('0deg', {duration: 500});
          }
        }}
      />
      <Button
        title="start combination"
        onPress={() => {
          if (translateX.value == 0) {
            translateX.value = withTiming(100, {duration: 500});
            rotate.value = withTiming('180deg', {duration: 500});
            scale.value = withTiming(2, {duration: 500});
          } else {
            translateX.value = withTiming(0, {duration: 500});
            rotate.value = withTiming('0deg', {duration: 500});
            scale.value = withTiming(1, {duration: 500});
          }
        }}
      />
    </View>
  );
};

export default Transforms;
