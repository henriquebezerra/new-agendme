import { Button, Text } from "react-native";
import { Container } from "./style";
import { UserProfileAction } from "./actions";
import { useNavigation } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";

const UserProfile = () => {
  const navigation = useNavigation<PreloadScreenProp>();
  const action = new UserProfileAction();

  const handleLogout = () => {
    action.logout().finally(() => {
      navigation.reset({routes:[{name:'SignIn'}]});
    });
  }

  return(
    <Container>
      <Text>User Profile</Text>
      <Button title="Logout" onPress={() => handleLogout()} />

    </Container>
  );

}

export default UserProfile;
