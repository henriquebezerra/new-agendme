import { useState, useEffect, useContext } from 'react';
import SignInput from '@/components/SignInput';
import {
  AnimatedViewStyle,
  AreaTecladoView, Container,
  CustomButton,
  CustomButtonText, 
  SignMessageButton,
  SignMessageText,
  SignMessageTextButton,
} from '@/screens/SignUp/style';
import { PersonIcon, EmailIcon, PasswordIcon, AppointmentIcon} from '@/constants/icons';
import { Animated, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SignUpAction } from '@/screens/SignUp/actions';
import { Authenticated } from '@/model/authenticated.model';
import DropdownPicker from '@/components/DropdownPicker';
import { OptionsType, PreloadScreenProp } from '@/types/general-type';
import { UserContext } from '@/contexts/UserContext';
import { Usuario } from '@/model/usuario.model';
import { useTranslation } from 'react-i18next';

const SignUp = () => {

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [profileField, setProfileField] = useState<OptionsType>({label: '', value: ''});
  const [perfisOptions, setPerfisOptions] = useState<OptionsType[]>([]);
  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const navigation = useNavigation<PreloadScreenProp>();
  const service = new SignUpAction();
  const { dispatch: userDispatch } = useContext(UserContext);
  const { t } = useTranslation();

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
    setPerfisOptions( await service.buscarPerfis());
  }

  const abrirTelaLogin = () => {
    navigation.reset({
      routes: [{name:'SignIn'}]
    });
  }

  const handleCadastrar = () => {
    let usuario = new Usuario(nameField, emailField, passwordField, profileField.value);
    service.cadastrar(usuario).then((data:Authenticated) => {
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
        <AppointmentIcon size={200} color="#268596" />
        <Animated.View style={[AnimatedViewStyle.style, {
          transform:[{
            translateY:offset.y
          }]
        }]}>
        <SignInput 
          icon={<PersonIcon/>}
          placeholder={t('typeYourName')}
          value={nameField}
          onChangeText={name=>setNameField(name)}/>

          <SignInput 
            icon={<EmailIcon/>}
            placeholder={t('typeYourEmail')}
            value={emailField}
            onChangeText={email=>setEmailField(email)}/>

          <SignInput 
            icon={<PasswordIcon/>} 
            placeholder={t('typeYourPassword')}
            value={passwordField}
            onChangeText={password => setPasswordField(password)}
            password={true}/>
            
          <DropdownPicker 
            options={perfisOptions} 
            setSelectedValue={setProfileField} 
            placeholder={profileField.label || t('selectYourProfile')}/>

          <CustomButton onPress={handleCadastrar}>
            <CustomButtonText>{t('signUpButton')}</CustomButtonText>
          </CustomButton>
        
          <SignMessageButton onPress={abrirTelaLogin}>
            <SignMessageText>{t('doYouHaveAccountAlready')}</SignMessageText>
            <SignMessageTextButton>{t('signInScreen')}</SignMessageTextButton>
          </SignMessageButton>
        </Animated.View>
      </AreaTecladoView>
    </Container>
  );
}

export default SignUp;