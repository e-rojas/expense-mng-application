import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStack from "../Screens/FeedStack";
import ProfileStack from "../Screens/ProfileStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from 'react-native-elements';
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const user = useSelector((state: RootStore) => state.user);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Expenses"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          headerRight: () =>  <Avatar containerStyle={{marginRight:10}} size={30} rounded source={{uri:user.avatar}} />
        }}
      />
      <Tab.Screen
        name="Profile stack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person" color={color} size={size} />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
