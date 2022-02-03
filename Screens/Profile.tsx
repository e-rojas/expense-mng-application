import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import * as ImagePicker from "expo-image-picker";
import { RootStore } from "../redux/store/store";

import { updateUser } from "../redux/actions/User";
type Props = {};

const Profile = ({}: Props) => {
  const [profileForm, setProfileForm] = React.useState<{
    image: string;
    firstName: string;
    avatar: null | string;
  }>({
    image: "",
    firstName: "",
    avatar: null,
  });

  const user = useSelector((state: RootStore) => state.user);
  const submit = useSelector((state: RootStore) => state.submit);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      base64: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileForm({
        ...profileForm,
        image:
          Platform.OS === "android"
            ? result.uri
            : result.uri.replace("file://", ""),
        avatar: result.base64 as string,
      });
    }
  };

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder={user.firstName}
          value={profileForm.firstName}
          onChangeText={(text) =>
            setProfileForm({ ...profileForm, firstName: text })
          }
        />
      </View>
      <ImageSelector
        profileForm={profileForm}
        setProfileForm={setProfileForm}
        pickImage={pickImage}
      />
      <TouchableHighlight
      style={{opacity: submit.sending || !profileForm.firstName || !profileForm.image || !profileForm.avatar ? 0.2 : 1, marginTop:30}}
      disabled={submit.sending || !profileForm.firstName || !profileForm.image || !profileForm.avatar}
        onPress={() => {
          const data = {
            firstName: profileForm.firstName,
            avatar: profileForm.avatar,
            base64: true,
          };
          dispatch(updateUser(user, data))
         setTimeout(() => {
          setProfileForm({ ...profileForm, firstName: "", avatar: null , image: ""});
         }, 1000);
        }}
       
      >
        <View style={styles.button}>
        {submit.sending && <ActivityIndicator color="#AA14F0" />}
          <Text style={styles.buttonText}>{submit.sending ? 'Updating': 'Send'} </Text>
        </View>
      </TouchableHighlight>
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
    paddingLeft: 10,
    paddingRight: 10,
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
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  buttonText:{
   marginLeft: 5
  },
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
    alignSelf: "stretch",
  },
  label: {
    paddingLeft: 12,
    fontWeight: "bold",
  },
});
