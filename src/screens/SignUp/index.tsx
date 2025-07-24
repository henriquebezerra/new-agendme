import { useState, useEffect } from 'react';
import ImageLogo from '@/components/ImageLogo';
import SignInput from '@/components/SignInput';
import {
  AnimatedViewStyle,
  AreaTecladoView, Container,
  CustomButton,
  CustomButtonText, 
  SignMessageButton,
  SignMessageText,
  SignMessageTextButton
} from '@/screens/SignUp/style';
import { personIcon, emailIcon, passwordIcon} from '@/constants/icons';
import { Animated, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SignUpAction } from '@/screens/SignUp/actions';

type RootStackParamList = {
  SignIn: undefined;
};

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;

const SignUp = () => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const navigation = useNavigation<PreloadScreenProp>();
  const service = new SignUpAction();

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

  const abrirTelaLogin = () => {
    navigation.reset({
      routes: [{name:'SignIn'}]
    });
  }

  return (
    <Container>
      <AreaTecladoView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
        <ImageLogo width={200} height={200} />
        <Animated.View style={[AnimatedViewStyle.style, {
          transform:[{
            translateY:offset.y
          }]
        }]}>
        <SignInput 
          icon={personIcon}
          placeholder='Digite seu nome'
          value={nameField}
          onChangeText={name=>setNameField(name)}/>

          <SignInput 
            icon={emailIcon}
            placeholder='Digite seu e-mail'
            value={emailField}
            onChangeText={email=>setEmailField(email)}/>

          <SignInput 
            icon={passwordIcon} 
            placeholder='Digite sua senha'
            value={passwordField}
            onChangeText={password => setPasswordField(password)}
            password={true}/>
          <CustomButton onPress={() => service.cadastrar(nameField, emailField, passwordField)}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>
        </Animated.View>
        
        <SignMessageButton onPress={abrirTelaLogin}>
          <SignMessageText>Já possui uma conta?</SignMessageText>
          <SignMessageTextButton>Faça login</SignMessageTextButton>
        </SignMessageButton>
      </AreaTecladoView>
    </Container>
  );
}

export default SignUp;