import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DatePicker from "@dietime/react-native-date-picker";
type Props = {
  setExpenseForm: React.Dispatch<
    React.SetStateAction<{
      description: string;
      amount: string;
      note: string;
      date: Date;
    }>
  >;
  expenseForm: {
    description: string;
    amount: string;
    note: string;
    date: Date;
  };
};

export default ({ setExpenseForm, expenseForm }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Select Date</Text>
      <DatePicker
        value={expenseForm.date}
        width={300}
        fontSize={19}
        height={120}
        onChange={(value: Date) =>
          setExpenseForm({ ...expenseForm, date: value })
        }
        format={"yyyy-mm-dd"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
