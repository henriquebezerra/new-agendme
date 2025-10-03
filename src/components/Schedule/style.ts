import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ScheduleBody = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px 20px 40px 20px;
`

export const ScheduleItem = styled.View`
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`

export const ScheduleInfo = styled.View`
  flex-direction: row;  
  align-items: center;
`

export const ProviderAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`

export const ProviderName = styled.Text`
  color: #000000;
  fonte-size: 18px;
  font-weight: bold;
`

export const ServiceInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const ServiceDescription = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  text-align: justify;
`

export const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const FinishScheduleButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #268596;
  border-radius: 10px;
  justify-content: center;
`

export const FinishButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export const styles = StyleSheet.create({
  flatContainer: {
    maxHeight: 390
  }
});