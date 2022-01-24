import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabs from "./TabsNavigator";
import Settings from "../Screens/Settings";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Settings: { msg: string };
  Feed: undefined;
  Login: undefined;
  Signup: undefined;
};

const Navigation = () => {
  const [userToken, setUserToken] = React.useState(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {userToken ? (
          <>
            <RootStack.Screen
              name="Home"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="Settings" component={Settings} />
          </>
        ) : (
          <>
            <RootStack.Screen name="Login" component={Login} />
            <RootStack.Screen name="Signup" component={Signup} />
          </>
        )}
        {/* <RootStack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Settings" component={Settings} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
