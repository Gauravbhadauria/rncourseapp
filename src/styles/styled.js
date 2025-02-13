import styled from 'styled-components/native';

export const StyledContainer = styled.View`
  background-color: red;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledCustomText = styled.Text`
  color: ${({color}) => color};
  font-size: 30;
`;
