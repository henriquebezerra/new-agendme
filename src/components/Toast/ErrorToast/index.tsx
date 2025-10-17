import { BaseToast } from "react-native-toast-message";
import  style  from "./style";

const ErrorToast = (props: any) => (
  <BaseToast
    {...props}
    style={style.errorStyle}
    contentContainerStyle={style.contentContainerStyle}
    text1Style={style.titleStyle}
    text2Style={style.descriptionStyle}
  />
);

export default ErrorToast;