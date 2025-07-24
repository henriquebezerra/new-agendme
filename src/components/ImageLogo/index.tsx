import React from "react";
import calendarLogo from '@/assets/images/calendar.png';
import { Image } from "react-native";
import { LogoStyle }  from '@/components/ImageLogo/style'

interface ImageLogoProps {
  width?:number;
  height?:number;
  style?: object; // Para permitir estilos adicionais
}

const ImageLogo:React.FC<ImageLogoProps> = ({width, height, style}) => {

  const dynamicStyle = {
    width: width ? width : LogoStyle.image.width,
    height: height ? height : LogoStyle.image.height,
  };

  return(
    <Image source={calendarLogo} style={[LogoStyle.image, dynamicStyle, style]}  />
  );
}

export default ImageLogo;