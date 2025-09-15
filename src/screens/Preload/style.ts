import styled from "styled-components/native";
import { Animated, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  background-color: #63C2D1;
  flex: 1;
  align-items: center;`;

export const AgendMeLabel = Animated.createAnimatedComponent(styled.Text`
  color: #6c6e6cff;
  text-align: center;
  font-family: 'Barrio_400Regular';
  width: 100%;
  height: 100px;
`);

export const AgendMeLabelArea = styled.View`
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50%;
`;

export const LogoArea = styled.View`
  justify-content: flex-end;
  align-items: center;
  bottom: 23px;
  width: 100%;
  position: absolute;
  padding-bottom: 23px;
`;

export const styles = StyleSheet.create({
  agendMeLabel: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
