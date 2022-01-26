import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import ListButton from "./ListButton";

type Props = {};

const ExpensesList = (props: Props) => {
  const expenses = useSelector((state: RootStore) => state.expenses);
  return (
    <>
     {
         expenses && (
            <FlatList
            style={{ width: "100%" , marginTop: 20}}
            keyExtractor={({ id }) => id}
            data={expenses}
            renderItem={({ item }) => (<ListButton expense={item} />)}
          />
         )
     }
    </>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
