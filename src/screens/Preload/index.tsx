import { Container, AgendMeLabel, AgendMeLabelArea, LogoArea, styles } from "@/screens/Preload/style";
import { useContext, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { PreloadAction } from "./actions";
import { UserContext } from "@/contexts/UserContext";
import { PreloadScreenProp } from "@/types/general-type";
import { AppointmentIcon } from "@/constants/icons";
import { Animated } from 'react-native';

const Preload = () => {

  const navigation = useNavigation<PreloadScreenProp>();
  const { dispatch: userDispatch } = useContext(UserContext);
  const service = new PreloadAction(userDispatch);
  const highlightAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    startAnimation();
    service.checkToken().then(() => {
      navigation.reset({routes:[{name:'UserNavigator'}]});
    }).catch(error => {
      navigation.reset({routes:[{name:'SignIn'}]});
    });
  }, [highlightAnim]);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(highlightAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(highlightAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }


  return (
    <Container>
      <AgendMeLabelArea>
        <AgendMeLabel
          style={[
            styles.agendMeLabel,
            { transform: [{ scale: highlightAnim }] },
          ]}
        >
          AgendMe
        </AgendMeLabel>
      </AgendMeLabelArea>
      <LogoArea>
        <AppointmentIcon size={30} color="#6c6e6cff"/>
      </LogoArea>
    </Container>
  );
}

export default Preload;