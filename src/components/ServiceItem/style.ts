import styled from "styled-components/native";

export const ServiceItemArea = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;

export const ServiceInfo = styled.View`
  flex: 1;
`;

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596
`;

export const ServicePrice = styled.Text`
  font-size: 14px;
  color: #268596
`;

export const AgendarButton = styled.TouchableOpacity`
  background-color: #4EADBE;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const AgendarButtonText = styled.Text`

  font-size: 14px;
  font-weight: bold;
  color: #ffffff;

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

export const ScheduleContainer = styled.View`
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 20px;
  max-height: 250px;
  overflow: hidden;
`;