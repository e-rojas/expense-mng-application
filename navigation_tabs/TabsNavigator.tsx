import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStack from "../Screens/FeedStack";
import ProfileStack from "../Screens/ProfileStack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import { Alert, Pressable } from "react-native";
import { openModal } from "../redux/actions/Modal";
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const dispatch = useDispatch();
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
          headerRight: () => (
            <Avatar
              containerStyle={{ marginRight: 10 }}
              size={30}
              rounded
              source={{ uri: user.avatar }}
            />
          ),
          headerLeft: () => (
            <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              marginLeft: 10,
            })}
            onPress={() => {
              dispatch(openModal(true))
            }}>
              <Ionicons name="add-circle" size={30} color="#6b6b6b" />
            </Pressable>
          ),
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
};

export default HomeTabs;
