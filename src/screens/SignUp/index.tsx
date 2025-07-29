import { useState, useEffect, useContext } from 'react';
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
import { OptionsType, RootStackParamList } from '@/types/options-type';
import { UserContext } from '@/contexts/UserContext';

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;

const SignUp = () => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [selectedValue, setSelectedValue] = useState("");
  const [perfisOptions, setPerfisOptions] = useState<OptionsType[]>([]);
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const navigation = useNavigation<PreloadScreenProp>();
  const service = new SignUpAction();
  const { dispatch: userDispatch } = useContext(UserContext);

  useEffect(() =>{
    iniciarAnimacao();
    carregarPerfis();
  }, []);

  const iniciarAnimacao = async () => {
    Animated.spring(offset.y, {
      toValue:0,
      speed:3,
      bounciness: 20,
      useNativeDriver: true
    }).start();
  }

  const carregarPerfis = async () => {
    setPerfisOptions(await service.buscarPerfis());
  }

  const abrirTelaLogin = () => {
    navigation.reset({
      routes: [{name:'SignIn'}]
    });
  }

  const handleCadastrar = () => {
    service.cadastrar(nameField, emailField, passwordField).then((data:Authenticated) => {
      userDispatch({
        type: 'setUser',
        payload:{
          user: data
        }
      });
      navigation.reset({routes:[{name:'UserNavigator'}]});
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
            options={perfisOptions} 
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