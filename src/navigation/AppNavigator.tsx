import Preload from "@/screens/Preload";
import SignIn from "@/screens/SignIn";
import SignUp from "@/screens/SignUp";
import ProviderProfile from "@/screens/ProviderProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserNavigator from "./UserNavigator";


const Stack = createNativeStackNavigator();

export default function AppNavigator() {

  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}