import { StyleSheet, Alert } from 'react-native';
import styled from "styled-components/native";

export const AnimatedViewStyle = StyleSheet.create({
    style:{
        width: '100%',
        padding: 20
    }
});

export const Container = styled.SafeAreaView`
  background-color: #63C2D1;
  flex: 1;`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF`;
    
export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;`;

export const SignMessageText = styled.Text`
    font-size:16px;
    color: #268596`;

export const SignMessageTextButton = styled.Text`
    font-size: 16px;
    color: #268596;
    font-weight: bold;
    margin-left: 5px;`;

export const AreaTecladoView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;`;

export const AppAlert = Alert;