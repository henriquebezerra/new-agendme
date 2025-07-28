import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83D6E3;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;`;

export const EmptyOptionView = styled.View`
  align-items: center;
  `;
  
export const EmptyText = styled.Text`
  color: #268596;
  font-weight: 500;
`;


export const OptionContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  max-height: 250px;
  overflow: hidden;
`;

export const AriaModalContent = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const AriaModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin: 0;
`;

export const TextField = styled.Text`
  color: '#268596';
  margin-left: 10px;
  font-size: 16px;
`;


export const styles = StyleSheet.create({
 
  optionText: {
    padding: 15, 
    textAlign: 'left',
    color: '#268596',
    fontSize: 17,
  },

  inputText: {
    color: '#268596', 
    marginLeft: 10, 
    fontSize: 16
  }
});