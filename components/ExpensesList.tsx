import { FlatList, StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import ListButton from "./ListButton";
import Modal from "./Modal";
import AddExpenseForm from "./AddExpenseForm";

type Props = {};

const ExpensesList = (props: Props) => {
  const expenses = useSelector((state: RootStore) => state.expenses);
  return (
    <>
      
      {expenses && (
        <FlatList
          style={{ width: "100%", marginTop: 20 }}
        
          data={expenses}
          renderItem={({ item }) => <ListButton expense={item} key={item.id} />}
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
