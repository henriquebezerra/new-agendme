import { Container, AgendMeLabel, AgendMeLabelArea, LogoArea } from "@/screens/Preload/style";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ImageLogo from "@/components/ImageLogo";
import { PreloadAction } from "./actions";
import { UserContext } from "@/contexts/UserContext";
import { PreloadScreenProp } from "@/types/general-type";
import { AppointmentIcon } from "@/constants/icons";


const Preload = () => {

  const navigation = useNavigation<PreloadScreenProp>();
  const { dispatch: userDispatch } = useContext(UserContext);
  const service = new PreloadAction(userDispatch);

  useEffect(() => {
    service.checkToken().then(() => {
      navigation.reset({routes:[{name:'UserNavigator'}]});
    }).catch(error => {
      navigation.reset({routes:[{name:'SignIn'}]});
    });
  }, []);

  return (
    <Container>
      <AgendMeLabelArea>
        <AgendMeLabel>AgendMe</AgendMeLabel>
      </AgendMeLabelArea>
      <LogoArea>
        <AppointmentIcon size={30} color="#6c6e6cff"/>
      </LogoArea>
    </Container>
  );

}

export default Preload;