import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/actions/User";


type Props = {};

const Settings = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Logout" onPress={()=> {
       dispatch(logoutUser());
      }} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
