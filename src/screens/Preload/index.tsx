import { Container, LoadingIcon } from "@/screens/Preload/style";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ImageLogo from "@/components/ImageLogo";

type RootStackParamList = {
  SignIn: undefined;
};

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Preload = () => {

  const navigation = useNavigation<PreloadScreenProp>();

  useEffect(() => {
      // Simular verificação de autenticação ou carregamento
    const timer = setTimeout(() => {
      // Use replace para substituir a tela Preload (usuário não pode voltar)
      navigation.replace('SignIn');
      
      // OU use navigate se quiser permitir que o usuário volte
      // navigation.navigate('SignIn');
    }, 2000); // 2 segundos
  }, []);


  return (
    <Container>
      <ImageLogo width={250} height={250} />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );

}

export default Preload;