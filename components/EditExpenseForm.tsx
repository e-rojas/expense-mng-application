import { StyleSheet, Text, View } from "react-native";
import React, { SetStateAction } from "react";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import { TextInput } from "react-native-gesture-handler";

import moment from "moment";

import DatePicker from "./DatePicker";

type Props = {
  expense: Expense;
};
const currentDate = new Date();
const EditExpenseForm = ({ expense }: Props) => {
  const [expenseForm, setExpenseForm] = React.useState({
    description: expense.description,
    amount: expense.amount.toString(),
    note: expense.note,
    date: new Date(expense.createdAt),
  });
  const amount = (expense.amount / 100).toString();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput style={styles.input} placeholder={expense.description} />
      <Text style={styles.label}>Amount:</Text>
      <TextInput style={styles.input} placeholder={amount} />
      <Text style={styles.label}>Note:</Text>
      <TextInput style={styles.input} placeholder={expense.note} />

      <View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Update Date
        </Text>
        <DatePicker setExpenseForm={setExpenseForm} expenseForm={expenseForm} />
      </View>
    </View>
  );
};

export default EditExpenseForm;

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingtop
  },
  label: {
    paddingLeft: 12,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
    marginTop: 5,
    borderColor: "gray",
  },
});
