import { InputArea, InputField } from '@components/SignInput/style';
import Entypo from '@expo/vector-icons/Entypo';

interface SignInputProps {
  placeholder: string;
  value:string;
  onChangeText: (text:string) => void;
  password?:boolean;
  icon: React.ReactNode;
}

const SignInput: React.FC<SignInputProps> = ({
  placeholder,
  value,
  onChangeText,
  password,
  icon
}) => {
  return(
    <InputArea>
      {icon}
      <InputField 
        placeholder={placeholder}
        placeholderTextColor='#268596'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}>
      </InputField>
    </InputArea>
  );
}

export default SignInput;