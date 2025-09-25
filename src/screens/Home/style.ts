import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #63C2D1;
  
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 250px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
`;

export const LocationFinder = styled.TouchableOpacity`
`;

export const SearchArea = styled.View`
  background-color: #4EADBE;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px; 
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size : 16px;
  color: #FFFF;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const EstabelecimentosArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;