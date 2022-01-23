import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";

const PROFILE_STACK = createNativeStackNavigator();

function ProfileStack() {
  return (
    <PROFILE_STACK.Navigator>
      <PROFILE_STACK.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      {/* other screens */}
    </PROFILE_STACK.Navigator>
  );
}

export default ProfileStack;
