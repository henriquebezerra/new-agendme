import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


export const PersonIcon = ({size = 24, color = 'black'}) => {
  return <FontAwesome6 name="person" size={size} color={color} />
}

export const EmailIcon = ({size = 24, color = 'black'}) => {
  return <Entypo name="email" size={size} color={color} />
}

export const PasswordIcon = ({size = 24, color = 'black'}) => {
  return <Entypo name="lock" size={size} color={color} />
}

export const HomeIcon = ({size = 24, color = 'black'}) => {
  return <Feather name="home" size={size} color={color} />
}

export const SearchIcon = ({size = 24, color = 'black'}) => {
  return <Feather name="search" size={size} color={color} />
}

export const AppointmentIcon = ({size = 24, color = 'black'}) => {
  return <Entypo name="calendar" size={size} color={color} />
}

export const FavoriteIcon = ({size = 24, color = 'black'}) => {
  return <MaterialIcons name="favorite-border" size={size} color={color} />
}

export const UserIcon = ({size = 24, color = 'black'}) => {
  return <FontAwesome name="user" size={size} color={color} />
}

export const LocationIcon = ({size = 24, color = 'black'}) => {
  return <FontAwesome6 name="location-crosshairs" size={size} color={color} />
}

export const CloseIcon = ({size = 24, color = 'black'}) => {
  return <AntDesign name="close" size={size} color={color} />
}

export const BackIcon = ({size = 24, color = 'black'}) => {
  return <AntDesign name="left" size={size} color={color} />
}

export const UserFeatherIcon = ({size = 24, color = 'black'}) => {
  return <Feather name="user" size={size} color={color} />
}