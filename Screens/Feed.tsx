import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";
import { registerUser } from "../redux/actions/User";
import { useDispatch } from 'react-redux';
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Feed">;
};

const Feed = ({ navigation }: Props) => {
  const dispatch = useDispatch();

React.useEffect(() => {
  dispatch(registerUser({
    firstName:'minh',
    lastName:'Doe',
    email:'minh@gmail.com',
    password:'funny1',
  }))
}, [])
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Button
        title="Go to Settings"
        onPress={() =>
          navigation.navigate("Settings", { msg: "From Feed Screen" })
        }
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function firstName(firstName: any, arg1: string, lastName: any, arg3: string, password: any, arg5: string, email: any, arg7: string) {
  throw new Error("Function not implemented.");
}

function lastName(firstName: any, arg1: string, lastName: any, arg3: string, password: any, arg5: string, email: any, arg7: string) {
  throw new Error("Function not implemented.");
}

function password(firstName: any, arg1: string, lastName: any, arg3: string, password: any, arg5: string, email: any, arg7: string) {
  throw new Error("Function not implemented.");
}

function email(firstName: any, arg1: string, lastName: any, arg3: string, password: any, arg5: string, email: any, arg7: string) {
  throw new Error("Function not implemented.");
}

