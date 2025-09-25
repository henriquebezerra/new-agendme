import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  background-color: #FFFFFF;
  flex: 1;`;

export const FakeSwiper = styled.View`
  background-color: #63C2D1;
  justify-content: center;
  align-items: center;
  height: 155px;
  padding-bottom: 30px;
`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #fff;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #000000;
  margin: 3px;
`;

export const PageBody = styled.View<{ pageBodyHeight ?: number }>`
  background-color: #FFFFFF;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: ${(props: { pageBodyHeight?: number }) => props.pageBodyHeight ? props.pageBodyHeight : 0}px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const ServiceArea = styled.View`
  margin-top: 20px;
  max-height: 350px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 245px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #FFFFFF;
`;

export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 30px;
`;

export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 55px;
  left: 10px;
  z-index: 9;
  `;
  
export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const ServicesTitle = styled.Text`
  color: #268596;
  font-size: 18px;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 20px;
`;
