import { BaseToast } from "react-native-toast-message";
import  style  from "./style";

const SuccessToast = (props: any) => (
  <BaseToast
    {...props}
    style={style.successStyle}
    contentContainerStyle={{ paddingHorizontal: 15 }}
    text1Style={{
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    }}
    text2Style={{
      fontSize: 14,
      color: '#666',
    }}
  />
);

export default SuccessToast;