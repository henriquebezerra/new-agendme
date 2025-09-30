import styled from 'styled-components/native';


export const AriaModalContent = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AriaModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 0;
`;

export const ContentModal = styled.View`
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  padding: 15px 0 0 15px;
`