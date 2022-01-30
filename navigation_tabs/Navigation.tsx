import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabs from "./TabsNavigator";
import Settings from "../Screens/Settings";
import Login from "../Screens/Login";
import { RootStore } from "../redux/store/store";
import { useSelector } from "react-redux";
import { Expense } from "../redux/actions/ExpensesActionsTypes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
  Settings: { msg: string, expense:Expense };
  Feed: undefined;
  Login: undefined;
  Signup: undefined;
};

const Navigation = () => {
  const user = useSelector((state: RootStore) => state.user);

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {user.isLoggedIn ? (
          <>
            <RootStack.Screen
              name="Home"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <RootStack.Screen name="Settings"  component={Settings} options={{ title:'Edit Expense' }} />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
