import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./Feed";
const FEED_STACK = createNativeStackNavigator();

function FeedStack() {
  return (
    <FEED_STACK.Navigator>
      <FEED_STACK.Screen
        name="Feed"
        component={Feed}
        options={{ headerShown: false }}
      />
      {/* other screens */}
    </FEED_STACK.Navigator>
  );
}

export default FeedStack;
