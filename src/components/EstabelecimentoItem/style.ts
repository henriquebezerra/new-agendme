
import styled from 'styled-components/native';

export const Area = styled.TouchableOpacity`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 100px;
  border-radius: 20px;
`;

export const InfoArea = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const UserEstabelecimento = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const Localidade = styled.Text`
  font-size: 12px;
  font-weight: bold;
  `;

export const VerPerfilButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

export const VerPerfilButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;