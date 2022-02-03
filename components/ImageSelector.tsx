import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
const placeholderImg = require("../assets/placeholder.png");
type Props = {
  profileForm: {
    image: string;
    firstName: string;
    avatar: null | string;
  };
  pickImage: () => Promise<void>;
  setProfileForm: React.Dispatch<
    React.SetStateAction<{
      image: string;
      firstName: string;
      avatar: null | string;
    }>
  >;
};

const ImageSelector = ({ profileForm, setProfileForm , pickImage}: Props) => {

  return (
    <View style={{ alignSelf: "stretch" }}>
      <View style={styles.row}>
        <Button title="Select Image" onPress={pickImage} />
        <View>
          {profileForm.image ? (
            <Image
              source={{ uri: profileForm.image }}
              style={styles.selectedImage}
            />
          ) : (
            <Image source={placeholderImg} style={styles.selectedImage} />
          )}
        </View>
      </View>
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    paddingRight: 12,
    paddingLeft: 12,
  },
  selectedImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
