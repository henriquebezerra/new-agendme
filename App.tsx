import UserContextProvider from '@contexts/UserContext';
import AppNavigator from '@navigation/AppNavigator';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  return (


    <UserContextProvider>
      <AppNavigator />
    </UserContextProvider>
  );
}

