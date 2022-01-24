import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {};

const Signup = (props: Props) => {
  const [signupInfo, setSignupInfo] = React.useState<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>({ email: "", password: "", firstName: "", lastName: "" });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.textInput}
        placeholder="First Name"
        placeholderTextColor="#787A91"
        value={signupInfo.firstName}
        onChangeText={(firstName: string) =>
          setSignupInfo((prevState) => ({ ...prevState, firstName }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Last Name"
        placeholderTextColor="#787A91"
        value={signupInfo.lastName}
        onChangeText={(lastName: string) =>
          setSignupInfo((prevState) => ({ ...prevState, lastName }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#787A91"
        value={signupInfo.email}
        onChangeText={(email: string) =>
          setSignupInfo((prevState) => ({ ...prevState, email }))
        }
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#787A91"
        value={signupInfo.password}
        onChangeText={(password: string) =>
          setSignupInfo((prevState) => ({ ...prevState, password }))
        }
        textContentType="password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text >Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    backgroundColor: '#D6E5FA',
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
   
  },
  button: {
    backgroundColor: '#6998AB',
    padding: 10,
    borderRadius: 5,
  }
});
