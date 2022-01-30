import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import ListButton from "./ListButton";
import Modal from "./Modal";
import AddExpenseForm from "./AddExpenseForm";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";
import DatePicker from "@dietime/react-native-date-picker";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Feed">
};

const Picker = () => {
  const [date, setDate] = React.useState(new Date());

  return (
      <View>
          <Text>{date ? date.toDateString() : "Select date..."}</Text>
          <DatePicker
              value={date}
              onChange={(value) => setDate(value)}
              format="yyyy-mm-dd"
          />
      </View>
  );
}

const ExpensesList = ({navigation}: Props) => {
  const expenses = useSelector((state: RootStore) => state.expenses);
  return (
    <>
      
      {expenses && (
        <FlatList
          style={{ width: "100%", marginTop: 20 }}
        
          data={expenses}
          renderItem={({ item }) => <ListButton expense={item} key={item.id} navigation={navigation} />}
        />
      )}
      <Modal>
        <Text>Create Expense</Text>
        <AddExpenseForm />
      </Modal>
    </>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
