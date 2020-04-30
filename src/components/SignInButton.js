import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignInButton = ({ onSignInPressed }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSignInPressed();
      }}
    >
      <Text style={styles.text}>SIGN IN</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6ABD47",
    alignSelf: "center",
    marginTop: 10,
    width: 280,
    elevation: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});

export default SignInButton;
