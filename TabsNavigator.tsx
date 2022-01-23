import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStack from "./Screens/FeedStack";
import ProfileStack from "./Screens/ProfileStack";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed stack"
        component={FeedStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),
          tabBarLabel: () => null,
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
