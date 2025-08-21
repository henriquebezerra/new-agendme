import { UserContext } from "@/contexts/UserContext";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useContext, useState } from "react";
import { 
  AvatarIcon, 
  TabArea, 
  TabItem, 
  TabItemCenter 
} from '@/components/CustomTabBar/style';
import { 
  HomeIcon, 
  SearchIcon, 
  AppointmentIcon, 
  FavoriteIcon, 
  HomeIconFull,
  SearchIconFull,
  FavoriteIconFull,
  UserIcon,
  UserFeatherIcon
} from "@/constants/icons";  


const CustomTabBar = ({ navigation }: BottomTabBarProps) => {

    const {state: user } = useContext(UserContext);
    const [selectedBar, setSelectedBar] = useState<string>('Home');

    const goTo = (screenName:string) => {
      setSelectedBar(screenName);
      navigation.navigate(screenName);
    }

    const renderAvatarIcon = () => {
      if (user.user && user.user.avatar) {
        return <AvatarIcon source={{uri:user.user.avatar}} />;
      } else if (selectedBar === 'Profile') {
        return <UserIcon size={30} />;
      } else {
        return <UserFeatherIcon size={30} />;
      }
    }

    return (
      <TabArea>
        <TabItem onPress={() => goTo('Home')}>
          {selectedBar === 'Home' ? <HomeIconFull size={30} /> : <HomeIcon size={30} />}
        </TabItem>
        <TabItem onPress={() => goTo('Search')}>
          {selectedBar === 'Search' ? <SearchIconFull size={30} /> : <SearchIcon size={30} />}
        </TabItem>
        <TabItemCenter onPress={() => goTo('Appointments')}>
          <AppointmentIcon size={30}/>
        </TabItemCenter>
        <TabItem onPress={() => goTo('Favorites')}>
          {selectedBar === 'Favorites' ? <FavoriteIconFull size={30} /> : <FavoriteIcon size={30} />}
        </TabItem>
        <TabItem onPress={() => goTo('Profile')}>
          { renderAvatarIcon() }
        </TabItem>
      </TabArea>
    );
}

export default CustomTabBar;