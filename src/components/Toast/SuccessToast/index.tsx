import { BaseToast } from "react-native-toast-message";
import  style  from "./style";

const SuccessToast = (props: any) => (
  <BaseToast
    {...props}
    style={style.successStyle}
    contentContainerStyle={style.contentContainerStyle}
    text1Style={style.titleStyle}
    text2Style={style.descriptionStyle}
  />
);

export default SuccessToast;