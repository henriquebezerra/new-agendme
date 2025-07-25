import styled from 'styled-components/native';

export const TabArea = styled.View`
  height: 80px;
  background-color: #4EADBE;
  flex-direction: row; 
`;

export const TabItem = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-radius: 35px;
  border: 3px solid #4EADBE;
  margin-top: -20px;
`

export const AvatarIcon = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`