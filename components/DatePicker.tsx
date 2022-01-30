import { StyleSheet, Text, View } from "react-native";
import React from "react";
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
  title: string;
};

export default ({ setExpenseForm, expenseForm, title }: Props) => {


  return (
    <View>
      <Text style={styles.title}>{title} </Text>
      <View style={styles.datePickerContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  datePickerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
