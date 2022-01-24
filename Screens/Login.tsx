import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";

type navigationProp = StackNavigationProp<RootStackParamList, "Login">;
type Props = {
  navigation: navigationProp;
};

const Login = ({ navigation }: Props) => {
  const [isLoginActive, setIsLoginActive] = React.useState(true);
  const [loginInfo, setLoginInfo] = React.useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>({ email: "", password: "", firstName: "", lastName: "" });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLoginActive ? "Signup" : "Login"} </Text>
      {isLoginActive && (
        <>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            placeholderTextColor="#787A91"
            value={loginInfo.firstName}
            onChangeText={(firstName: string) =>
              setLoginInfo((prevState) => ({ ...prevState, firstName }))
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            placeholderTextColor="#787A91"
            value={loginInfo.lastName}
            onChangeText={(lastName: string) =>
              setLoginInfo((prevState) => ({ ...prevState, lastName }))
            }
          />
        </>
      )}
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#787A91"
        value={loginInfo.email}
        onChangeText={(email: string) =>
          setLoginInfo((prevState) => ({ ...prevState, email }))
        }
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#787A91"
        value={loginInfo.password}
        onChangeText={(password: string) =>
          setLoginInfo((prevState) => ({ ...prevState, password }))
        }
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>{isLoginActive ? "Signup" : "Login"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => {
          setIsLoginActive(!isLoginActive);
        }}
      >
        <Text>{isLoginActive ? "Login" : "Signup"} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    width: "80%",
    backgroundColor: "#D6E5FA",
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#6998AB",
    padding: 10,
    borderRadius: 5,
  },
  signUpBtn: {
    marginTop: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 40,
  },
  signUpBtnText: {
    color: "#6998AB",
  },
});
