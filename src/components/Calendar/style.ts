import styled from 'styled-components/native'

export const CalendarItem = styled.View`
  background-color: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`

export const DateInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`


export const DatePrevArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`


export const DateTitleArea = styled.View`
  width: 155px;
  justify-content: center;
  align-items: center;
`

export const DateTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #000000;
`

export const DateNextArea = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`

export const DateItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  
`

export const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  border-bottom-width: 1px;
`

export const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`