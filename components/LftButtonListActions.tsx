import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import TabIcon from "./TabIcon";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import { User } from "../redux/actions/UserActionTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";

type Props = {
  expense: Expense;
  user: User;
  navigation: StackNavigationProp<RootStackParamList, "Feed">
};

const LftButtonListActions = ({ expense, user, navigation}: Props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#6D8299"
      onPress={() => {
        navigation.navigate("Settings", { msg: "From Feed Screen", expense });
      }}
      style={styles.leftAction}
    >
      <TabIcon name="edit" color="#fff" />
    </TouchableHighlight>
  );
};

export default LftButtonListActions;

const styles = StyleSheet.create({
  actionText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#EFF8FF",
    paddingRight: 2,
    paddingLeft: 2,
  },
  leftAction: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,

    borderRadius: 5,
    marginRight: 10,
  },
});
