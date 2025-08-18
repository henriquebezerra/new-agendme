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
  Profile: undefined;
};


export type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;