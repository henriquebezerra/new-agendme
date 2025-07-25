import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';


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
  return <Entypo name="home" size={size} color={color} />
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