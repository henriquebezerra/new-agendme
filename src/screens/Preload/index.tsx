import { Container, LoadingIcon } from "@/screens/Preload/style";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ImageLogo from "@/components/ImageLogo";
import { PreloadAction } from "./actions";
import { UserContext } from "@/contexts/UserContext";

type RootStackParamList = {
  SignIn: undefined;
  UserNavigator: undefined;
};

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;

const Preload = () => {

  const navigation = useNavigation<PreloadScreenProp>();
  const { dispatch: userDispatch } = useContext(UserContext);
  const service = new PreloadAction(userDispatch);

  useEffect(() => {
    service.checkToken().then(() => {
      navigation.reset({routes:[{name:'UserNavigator'}]});
    }).catch(error => {
      navigation.reset({routes:[{name:'SignIn'}]});
    }) ;
  }, []);

  return (
    <Container>
      <ImageLogo width={250} height={250} />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );

}

export default Preload;