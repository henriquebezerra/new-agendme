
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
import { useState, useEffect } from "react";
import SignInput from '@components/SignInput';
import { Platform } from 'react-native';
import ImageLogo from "@/components/ImageLogo";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { emailIcon, passwordIcon } from "@/constants/icons";

type RootStackParamList = {
  SignUp: undefined;
};

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;


const SignIn=() => {
  
  const [offset] = useState(new Animated.ValueXY({x:0,y:80}));
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigation = useNavigation<PreloadScreenProp>();

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
            icon={emailIcon}
          />
          <SignInput 
            placeholder='Digite sua senha'
            value={passwordField}
            onChangeText={password=>setPasswordField(password)}
            icon={passwordIcon}
            password={true}
          />
          <CustomButton>
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