import { UserContext } from "@/contexts/UserContext";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { 
  AvatarIcon, 
  TabArea, 
  TabItem, 
  TabItemCenter 
} from '@/components/CustomTabBar/style';
import { HomeIcon, SearchIcon, AppointmentIcon, FavoriteIcon } from "@/constants/icons";  


const CustomTabBar = ({ navigation }: BottomTabBarProps) => {

    const {state: user } = useContext(UserContext);

    const goTo = (screenName:string) => {
      navigation.navigate(screenName);
    }

    return (
      <TabArea>
        <TabItem onPress={() => goTo('Home')}>
          <HomeIcon size={30} />
        </TabItem>
        <TabItem onPress={() => goTo('Search')}>
          <SearchIcon size={30}/>
        </TabItem>
        <TabItemCenter onPress={() => goTo('Appointments')}>
          <AppointmentIcon size={30}/>
        </TabItemCenter>
        <TabItem onPress={() => goTo('Favorites')}>
          <FavoriteIcon size={30}/>
        </TabItem>
        <TabItem onPress={() => goTo('Profile')}>
          <AvatarIcon source={{uri:user.user.avatar }} />
        </TabItem>
      </TabArea>
    );
}

export default CustomTabBar;