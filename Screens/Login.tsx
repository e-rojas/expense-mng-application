import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation_tabs/Navigation";
import isEmail from "validator/lib/isEmail";
import { resetForm } from "../utilities";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../redux/store/store";
import { loginUser, registerUser } from "../redux/actions/User";

type navigationProp = StackNavigationProp<RootStackParamList, "Login">;
type Props = {
  navigation: navigationProp;
  options: {
    headerShown: boolean;
  };
};

const Login = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.user);
  const submit = useSelector((state: RootStore) => state.submit);
  const [isRegisgerUserActive, setIsRegisterUserActive] = React.useState(true);
  const [loginInfo, setLoginInfo] = React.useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>({ email: "", password: "", firstName: "", lastName: "" });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isRegisgerUserActive ? "Signup" : "Login"}
      </Text>
      {isRegisgerUserActive && (
        <>
          <TextInput
            style={[
              styles.textInput,
              {
                borderWidth: loginInfo.firstName.length ? 0 : 1,
                borderColor: loginInfo.firstName.length ? "#000" : "#FC9918",
              },
            ]}
            placeholder="First Name"
            placeholderTextColor="#787A91"
            value={loginInfo.firstName}
            onChangeText={(firstName: string) =>
              setLoginInfo((prevState) => ({ ...prevState, firstName }))
            }
          />
          <TextInput
            style={[
              styles.textInput,
              {
                borderWidth: loginInfo.lastName.length ? 0 : 1,
                borderColor: loginInfo.lastName.length ? "#000" : "#FC9918",
              },
            ]}
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
        style={[
          styles.textInput,
          {
            borderWidth: isEmail(loginInfo.email) ? 0 : 1,
            borderColor: isEmail(loginInfo.email) ? "#000" : "#FC9918",
          },
        ]}
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
        style={[
          styles.textInput,
          {
            borderWidth: loginInfo.password.length ? 0 : 1,
            borderColor: loginInfo.password.length ? "#000" : "#FC9918",
          },
        ]}
        placeholder="Password"
        placeholderTextColor="#787A91"
        value={loginInfo.password}
        onChangeText={(password: string) =>
          setLoginInfo((prevState) => ({ ...prevState, password }))
        }
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              isEmail(loginInfo.email) && loginInfo.password.length
                ? "#6998AB"
                : "#F7F7F7",
          },
        ]}
        onPress={() => {
          if (isRegisgerUserActive) {
            dispatch(registerUser(loginInfo));
          } else {
            console.log(process.env.API_URL);
            dispatch(loginUser(loginInfo));
          }
          resetForm({ setLoginInfo });
        }}
        disabled={!isEmail(loginInfo.email)}
      >
        {submit.sending && <ActivityIndicator color="#AA14F0" />}
        <Text
          style={{
            color:
              isEmail(loginInfo.email) && loginInfo.password.length
                ? "#fff"
                : "#b7b7b7",
            marginLeft: 5,
          }}
        >
          {isRegisgerUserActive ? "Signup" : "Login"}
        </Text>
      </TouchableOpacity>
      {submit.error && (
        <Text style={styles.errorMessage}>{submit.errorMessage} </Text>
      )}
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => {
          setIsRegisterUserActive((prevState) => !prevState);
          resetForm({ setLoginInfo });
        }}
      >
        <Text>{isRegisgerUserActive ? "Login" : "Signup"} </Text>
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
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
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
  errorMessage: {
    color: "red",
    marginTop: 10,
  },
});
