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


// <ServiceItem key={key}>
//       <ServiceInfo>
//         <ServiceName>{title}</ServiceName>
//         <ServicePrice>R$ {value.toFixed(2)}</ServicePrice>
//       </ServiceInfo>
//       <AgendarButton>
//         <AgendarButtonText>Agendar</AgendarButtonText>
//       </AgendarButton>
//     </ServiceItem>