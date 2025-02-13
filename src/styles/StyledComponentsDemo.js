import {View, Text} from 'react-native';
import React from 'react';
import {StyledContainer, StyledCustomText} from './styled';

const StyledComponentsDemo = () => {
  return (
    <StyledContainer>
      <StyledCustomText color="white">Primary</StyledCustomText>
      <StyledCustomText color="yellow">Secondary</StyledCustomText>
    </StyledContainer>
  );
};

export default StyledComponentsDemo;
