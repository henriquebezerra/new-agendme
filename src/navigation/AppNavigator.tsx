import Preload from "@/screens/Preload";
import SignIn from "@/screens/SignIn";
import SignUp from "@/screens/SignUp";
import ProviderProfile from "@/screens/ProviderProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserNavigator from "./UserNavigator";
import UserProfile from "@/screens/UserProfile";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/Toast/style";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Preload"
          screenOptions={{
            headerShown:false
          }}>
          <Stack.Screen name="Preload" component={Preload}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="UserNavigator" component={UserNavigator}/>
          <Stack.Screen name="ProviderProfile" component={ProviderProfile}/>
          <Stack.Screen name="UserProfile" component={UserProfile}/>
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig}/>
    </>
  );
}