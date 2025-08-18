import CustomTabBar from '@/components/CustomTabBar';
import Home from '@/screens/Home';
import Search from '@/screens/Search';
import SignUp from '@/screens/SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function UserNavigator() {

  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name= "Home" component={Home} options={{headerShown:false}} />
      <Tab.Screen name= "Search" component={SignUp} />

    </Tab.Navigator>
  );

}