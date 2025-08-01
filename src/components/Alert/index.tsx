import { AlertButton } from "react-native";
import {AppAlert} from '@/components/Alert/style';

export const Alert = (title:string, msg:string, buttons: AlertButton[]) => {
  AppAlert.alert(title, msg, buttons);
};