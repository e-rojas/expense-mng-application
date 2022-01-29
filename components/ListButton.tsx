import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import moment from "moment";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import RgtActions from "./RgtActions";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
interface Props {
  expense: Expense;
}

const ListButton = ({ expense }: Props) => {
  const user = useSelector((state: RootStore) => state.user);
  const swipeableRef: any = React.useRef(null);
  return (
    <View style={[styles.button]}>
      <Swipeable 
        renderRightActions={ () => <RgtActions expense={expense} user={user} /> }
      >
        <View style={styles.row}>
          <View style={styles.info}>
            <Text style={styles.descriptionText}>{expense.description} </Text>
            <Text style={styles.smallText}>{expense.note} </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.priceText}>{`$${(expense.amount / 100).toFixed(
              2
            )}`}</Text>
            <Text style={styles.smallText}>
              {moment(expense.createdAt).format("MM DD, YYYY")}
            </Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#B9D4F1",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "space-between",
   
  },
  descriptionText: {
    color: "#fff",
    backgroundColor: "#B9D4F1",
  },
  priceText: {
    color: "#6d6d6d",
  },
  info: {
    flexDirection: "column",
  },
  smallText: {
    color: "#6d6d6d",
    fontSize: 12,
  },
});
