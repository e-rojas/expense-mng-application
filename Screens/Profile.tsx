import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "../components/Modal";
import { closeModal } from "../redux/actions/Modal";
import { useDispatch } from "react-redux";

type Props = {};

const Profile = ({}: Props) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

