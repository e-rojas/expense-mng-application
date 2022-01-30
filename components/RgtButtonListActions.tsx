import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import { deleteExpense } from "../redux/actions/Expenses";
import TabIcon from "./TabIcon";
import { User } from "../redux/actions/UserActionTypes";
import { useDispatch } from "react-redux";

type Props = {
  expense: Expense;
  user: User;
};

const RgtButtonListActions = ({ expense, user }: Props) => {
  const dispatch = useDispatch();
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#6D8299"
      onPress={() => {
        dispatch(deleteExpense(user, expense));
      }}
      style={styles.rightAction}
    >
      <TabIcon name="trash" color="#ff0000" />
    </TouchableHighlight>
  );
};

export default RgtButtonListActions;

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
  rightAction: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    borderRadius: 5,
    marginLeft: 10,
  },
});
