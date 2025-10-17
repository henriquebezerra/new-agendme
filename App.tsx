import UserContextProvider from '@contexts/UserContext';
import { Barrio_400Regular } from '@expo-google-fonts/barrio';
import AppNavigator from '@navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { Provider as PaperProvider } from 'react-native-paper';
import '@/localization';

export default function App() {
  const [fontsLoaded] = useFonts({
    Barrio_400Regular,
  });

  return (
    <PaperProvider>
      <UserContextProvider>
        <AppNavigator />
      </UserContextProvider>
    </PaperProvider>
  );
}

