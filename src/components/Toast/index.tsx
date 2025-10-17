import Toast from "react-native-toast-message";


export const ToastApp = ( type: 'success' | 'error' | 'info' | 'warning', title:string, message:string ) => {
  Toast.show({type: type, text1: title, text2: message, topOffset: 50});
}