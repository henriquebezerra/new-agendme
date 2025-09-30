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