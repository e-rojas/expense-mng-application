import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/User";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";
import EditExpenseForm from "../components/EditExpenseForm";


type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
  route: any;
};

const Settings = ({navigation,route}:Props) => {
  const {expense} = route.params;
  const dispatch = useDispatch();
  console.log('xxxxx')
  console.log(expense);
  
  
  return (
    <View style={styles.container}>
      <EditExpenseForm expense={expense} navigation={navigation}  />
      {/* <Text>Settings </Text>
      <Text>{route.params.msg} </Text>
     
      <Button title="Logout" onPress={()=> {
       dispatch(logoutUser());
      }} /> */}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
