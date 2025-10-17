import { ToastConfig } from "react-native-toast-message";
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";

  
export const toastConfig: ToastConfig  = {
  success: SuccessToast,
  error: ErrorToast
};