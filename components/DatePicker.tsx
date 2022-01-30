import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import DatePicker from "@dietime/react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
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
  console.log(expenseForm);

  return (
    <View>
      <Text style={styles.title}>Select Date</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={expenseForm.date}
        mode="date"
        display="calendar"
        onChange={(event, date) =>
          setExpenseForm({ ...expenseForm, date: date as Date })
        }
        style={{ height: 120, width: 300 }}
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
