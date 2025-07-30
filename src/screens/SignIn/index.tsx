
import { 
  Container,
  AreaTecladoView,
  AnimatedViewStyle,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageText,
  SignMessageTextButton,
  AppAlert
} from "@/screens/SignIn/style";
import { Animated } from "react-native";
import { useState, useEffect, useContext } from "react";
import SignInput from '@components/SignInput';
import { Platform } from 'react-native';
import ImageLogo from "@/components/ImageLogo";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EmailIcon, PasswordIcon } from "@/constants/icons";
import { SignInAction } from "./actions";
import { Authenticated } from "@/model/authenticated.model";
import { UserContext } from "@/contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "@/types/options-type";

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;


const SignIn=() => {
  
  const [offset] = useState(new Animated.ValueXY({x:0,y:80}));
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigation = useNavigation<PreloadScreenProp>();
  const {dispatch: userDispatch } = useContext(UserContext);
  const service = new SignInAction();

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
        data.avatar = 'http://img.freepik.com/foto-gratis/foto-primer-plano-amable-hombre-rubio-sonriendo-mientras-posa_132075-8195.jpg?t=st=1652130495~exp=1652131095~hmac=cd779c32e4a3c58f3d1a5a83655414a2a27a75ada4106986f05f6d42f8a813e7&w=360';
        userDispatch({
          type: 'setUser',
          payload:{
            user: data 
          }
        });
        abrirTelaPrincipal();
    })
    .catch((error) => {
      AppAlert.alert('Alerta', error.message, [
        {text: 'OK'}
      ]);
    })
  }

  return (
    <Container>
      <AreaTecladoView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ImageLogo width={250} height={250} />
        <Animated.View style={[AnimatedViewStyle.style, {
          transform: [{
            translateY: offset.y
          }]
        }]}>
          <SignInput 
            placeholder='Digite seu e-mail'
            value={emailField}
            onChangeText={texto=>setEmailField(texto)}
            icon={<EmailIcon/>}
          />
          <SignInput 
            placeholder='Digite sua senha'
            value={passwordField}
            onChangeText={password=>setPasswordField(password)}
            icon={<PasswordIcon/>}
            password={true}
          />
          <CustomButton onPress={login}>
            <CustomButtonText>Login</CustomButtonText>
          </CustomButton>
        </Animated.View>
        <SignMessageButton onPress={abrirTelaCadastro}>
          <SignMessageText>Ainda não possui uma conta?</SignMessageText>
          <SignMessageTextButton>Cadastre-se</SignMessageTextButton>
        </SignMessageButton>
      </AreaTecladoView>
    </Container>

  );

}

export default SignIn;