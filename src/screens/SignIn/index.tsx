
import { 
  Container,
  AreaTecladoView,
  AnimatedViewStyle,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageText,
  SignMessageTextButton
} from "@/screens/SignIn/style";
import { Animated } from "react-native";
import { useState, useEffect, useContext } from "react";
import SignInput from '@components/SignInput';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppointmentIcon, EmailIcon, PasswordIcon } from "@/constants/icons";
import { SignInAction } from "./actions";
import { Authenticated } from "@/model/authenticated.model";
import { UserContext } from "@/contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PreloadScreenProp } from "@/types/general-type";
import { Alert } from "@/components/Alert";
import { API_BASE_URL, ENDPOINT_BASE_URL } from "@env";
import { useTranslation } from "react-i18next";


const SignIn=() => {
  
  const [offset] = useState(new Animated.ValueXY({x:0,y:80}));
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigation = useNavigation<PreloadScreenProp>();
  const {dispatch: userDispatch } = useContext(UserContext);
  const service = new SignInAction();
  const { t } = useTranslation();

  useEffect(() =>{
    iniciarAnimacao();
  }, []);

  const iniciarAnimacao = async () => {
    Animated.spring(offset.y, {
      toValue:0,
      speed:3,
      bounciness: 20,
      useNativeDriver: true
    }).start();
  }

  const abrirTelaCadastro = () => {
    navigation.reset({routes: [{name:'SignUp'}]});
  }

  const abrirTelaPrincipal = () => {
    navigation.reset({
      routes:[{name:'UserNavigator'}]
    });
  }

  const login = () => {
    service.login(emailField, passwordField)
      .then(async (data:Authenticated) => {
        await AsyncStorage.setItem('token', data.token || '' );
        data.avatar = `${API_BASE_URL}${ENDPOINT_BASE_URL}${data.avatar}`;
        userDispatch({
          type: 'setUser',
          payload:{
            user: data 
          }
        });
        abrirTelaPrincipal();
    })
    .catch((error) => {
      Alert('Alerta', error.message, [{text: 'OK'}]);
    })
  }

  return (
    <Container>
      <AreaTecladoView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <AppointmentIcon size={250} color="#268596" />
        <Animated.View style={[AnimatedViewStyle.style, {
          transform: [{
            translateY: offset.y
          }]
        }]}>
          <SignInput 
            placeholder={t('typeYourEmail')}
            value={emailField}
            onChangeText={texto=>setEmailField(texto)}
            icon={<EmailIcon/>}
          />
          <SignInput 
            placeholder={t('typeYourPassword')}
            value={passwordField}
            onChangeText={password=>setPasswordField(password)}
            icon={<PasswordIcon/>}
            password={true}
          />
          <CustomButton onPress={login}>
            <CustomButtonText>{t('loginButton')}</CustomButtonText>
          </CustomButton>
        </Animated.View>
        <SignMessageButton onPress={abrirTelaCadastro}>
          <SignMessageText>{t('noRegistrationYet')}</SignMessageText>
          <SignMessageTextButton>{t('signUpButtonScreen')}</SignMessageTextButton>
        </SignMessageButton>
      </AreaTecladoView>
    </Container>

  );

}

export default SignIn;