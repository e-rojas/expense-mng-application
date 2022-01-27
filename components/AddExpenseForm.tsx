import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { closeModal } from "../redux/actions/Modal";
import { useDispatch } from "react-redux";


type Props = {};

const AddExpenseForm = (props: Props) => {
    const dispatch = useDispatch();
  const [expenseForm, setExpenseForm] = React.useState({
    description: "",
    amount: 0,
    category: "",
    date: new Date(),
  });
  return (
    <View style={{ marginTop: 20 }}>
      <View>
        <Text style={styles.label}>Description:</Text>
        <View style={styles.input}>
          <TextInput
            onChangeText={(text) =>
              setExpenseForm({ ...expenseForm, description: text })
            }
            value={expenseForm.description}
            placeholder={"Phone Bill"}
          />
        </View>
      </View>
      <View style={styles.half}>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>Amount:</Text>
          <View style={styles.input}>
            <TextInput
              onChangeText={(amt) => {
                const AMOUNT = amt;
                if (!AMOUNT || AMOUNT.match(/^\d{1,}(\.\d{0,2})?$/)) {
                  setExpenseForm({ ...expenseForm, amount: Number(AMOUNT) });
                }
              }}
              value={expenseForm.amount.toString()}
              placeholder={"$100.00"}
            />
          </View>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>Category:</Text>
          <View style={styles.input}>
            <TextInput
              onChangeText={(text) =>
                setExpenseForm({ ...expenseForm, category: text })
              }
              value={expenseForm.category}
              placeholder={"Food"}
            />
          </View>
        </View>
      </View>
      <View style={styles.datePicker}>
        <Text> Select date...</Text>
        {/* <DatePicker
          value={expenseForm.date}
          width={"80%"}
          fontSize={19}
          height={120}
          onChange={(value: Date) =>
            setExpenseForm({ ...expenseForm, date: value })
          }
          format={"yyyy-mm-dd"}
        /> */}
      </View>
      <View style={styles.fixToText}>
        <TouchableHighlight
          style={{
            ...styles.openButton,
            backgroundColor: "#2196F3",
            width: "25%",
          }}
          onPress={() => {
            dispatch(closeModal())
          }}
        >
          <Text style={styles.textStyle}>Close</Text>
        </TouchableHighlight>
        <Button title="Submit" onPress={() => {}} disabled={false} />
      </View>
    </View>
  );
};

export default AddExpenseForm;

const styles = StyleSheet.create({
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
  half: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  label: {
    paddingLeft: 12,
    fontWeight: "bold",
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 80,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
