import UserContextProvider from '@contexts/UserContext';
import AppNavigator from '@navigation/AppNavigator';
import { Barrio_400Regular } from '@expo-google-fonts/barrio';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Barrio_400Regular,
  });

  return (
    <UserContextProvider>
      <AppNavigator />
    </UserContextProvider>
  );
}

