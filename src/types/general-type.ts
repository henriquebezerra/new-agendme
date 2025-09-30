import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type OptionsType = {
  label: string;
  value: string;
}

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  UserNavigator: undefined;
  Search: undefined;
  ProviderProfile: undefined;
};

export type CustomModalStyle = {
  backgroundColor?: string;
}


export type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;