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
  SignMessageTextButton,
  AppAlert
} from '@/screens/SignUp/style';
import { PersonIcon, EmailIcon, PasswordIcon} from '@/constants/icons';
import { Animated, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SignUpAction } from '@/screens/SignUp/actions';
import { Authenticated } from '@/model/authenticated.model';
import DropdownPicker from '@/components/DropdownPicker';

type RootStackParamList = {
  SignIn: undefined;
};

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;

const SignUp = () => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [selectedValue, setSelectedValue] = useState("");
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const navigation = useNavigation<PreloadScreenProp>();
  const service = new SignUpAction();
  let options = [
    { label: 'Opção 1', value: 'opcao1' },
    { label: 'Opção 2', value: 'opcao2' },
    { label: 'Opção 3', value: 'opcao3' },
    { label: 'Opção 4', value: 'opcao4' },
    { label: 'Opção 5', value: 'opcao5' },
    { label: 'Opção 6', value: 'opcao6' },
    { label: 'Opção 7', value: 'opcao7' },
    { label: 'Opção 8', value: 'opcao8' },
    { label: 'Opção 9', value: 'opcao9' },
    { label: 'Opção 10', value: 'opcao10' },
  ];

  //options = [];


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

  const handleCadastrar = () => {
    service.cadastrar(nameField, emailField, passwordField)
    .then((data: Authenticated) => {
      console.log('Usuário cadastrado com sucesso!!');
    })
    .catch((error) => {
      AppAlert.alert('Alerta', error.message, [
        {text: 'OK'}
      ]);
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
          icon={<PersonIcon/>}
          placeholder='Digite seu nome'
          value={nameField}
          onChangeText={name=>setNameField(name)}/>

          <SignInput 
            icon={<EmailIcon/>}
            placeholder='Digite seu e-mail'
            value={emailField}
            onChangeText={email=>setEmailField(email)}/>

          <SignInput 
            icon={<PasswordIcon/>} 
            placeholder='Digite sua senha'
            value={passwordField}
            onChangeText={password => setPasswordField(password)}
            password={true}/>
            
          <DropdownPicker 
            options={options} 
            setSelectedValue={setSelectedValue} 
            placeholder={selectedValue || 'Selecione seu perfil'}/>
          <CustomButton onPress={handleCadastrar}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>
        
          <SignMessageButton onPress={abrirTelaLogin}>
            <SignMessageText>Já possui uma conta?</SignMessageText>
            <SignMessageTextButton>Faça login</SignMessageTextButton>
          </SignMessageButton>
        </Animated.View>
      </AreaTecladoView>
    </Container>
  );
}

export default SignUp;