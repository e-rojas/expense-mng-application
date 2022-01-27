import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import { closeModal, openModal } from "../redux/actions/Modal";

type Props = {};

const ModalPopUp: React.FC = ({ children }) => {
  const modal = useSelector((state: RootStore) => state.modal);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modal.active}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
   
    </View>
  );
};

export default ModalPopUp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
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
});
