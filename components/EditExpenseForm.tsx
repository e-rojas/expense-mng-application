import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Expense } from "../redux/actions/ExpensesActionsTypes";
import { TextInput } from "react-native-gesture-handler";
import moment from "moment";
import DatePicker from "./DatePicker";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import { editExpense } from "../redux/actions/Expenses";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";

type Props = {
  expense: Expense;
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
};
const currentDate = new Date();
const EditExpenseForm = ({ expense, navigation }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);

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
      <TextInput
        style={styles.input}
        placeholder={expense.description}
        onChangeText={(text) =>
          setExpenseForm({ ...expenseForm, description: text })
        }
      />
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder={amount}
        onChangeText={(amt) => {
          const AMOUNT = amt;
          if (!AMOUNT || AMOUNT.match(/^\d{1,}(\.\d{0,2})?$/)) {
            setExpenseForm({ ...expenseForm, amount: AMOUNT });
          }
        }}
      />
      <Text style={styles.label}>Note:</Text>
      <TextInput
        style={styles.input}
        placeholder={expense.note}
        onChangeText={(text) => setExpenseForm({ ...expenseForm, note: text })}
      />
      <View style={styles.container}>
        <DatePicker
          title="Edit Expense"
          setExpenseForm={setExpenseForm}
          expenseForm={expenseForm}
        />
      </View>
      <View>
        <Button
          style={[styles.button, {}]}
          title="Update"
          onPress={() => {
            dispatch(
              editExpense(user, {
                description: expenseForm.description,
                amount: parseFloat(expenseForm.amount) * 100,
                note: expenseForm.note,
                createdAt: moment(expenseForm.date).valueOf(),
                id: expense.id,
              })
            );
            setTimeout(() => {
              navigation.goBack();
            }, 1000);
          }}
        />
      </View>
    </View>
  );
};

export default EditExpenseForm;

const styles = StyleSheet.create({
  container: {},
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
  button: {
    backgroundColor: "#9AD0EC",
    marginTop: 30,
  },
});
