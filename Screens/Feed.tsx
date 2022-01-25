import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import { getUserExpenses } from "../redux/actions/Expenses";
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Feed">;
};
const Feed = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  React.useEffect(() => {
    dispatch(getUserExpenses(user));
  }, []);

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
