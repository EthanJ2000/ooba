import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SignIn from "../components/SignInSignUp/SignIn";

//Buttons
import SignInWithFacebook from "./SignInWithFacebookButton";
import SignInButton from "./SignInButton";

const InitialAuthDisplay = ({ props, navigation }) => {
  const [signInPressed, setSignInPressed] = useState(false);

  const onSignInPressed = () => {
    setSignInPressed(true);
  };

  const onSignInBackButtonPressed = () => {
    setSignInPressed(false);
  };

  return (
    <View>
      {!signInPressed ? (
        <View>
          <Image
            source={require("../../assets/icon-house-green.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>Welcome Back,</Text>
          <Text style={styles.subtitle}>Sign in to use your account</Text>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: "#F0F0F0",
              marginBottom: 20,
            }}
          />
          <SignInWithFacebook props={props} />
          <Text style={styles.or}> or</Text>
          <SignInButton onSignInPressed={onSignInPressed} />
        </View>
      ) : (
        <SignIn
          onSignInBackButtonPressed={onSignInBackButtonPressed}
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginVertical: 40,
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  title: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 20,
    color: "#6ABD47",
    marginLeft: 30,
  },
  subtitle: {
    color: "#ACACAC",
    marginLeft: 30,
    marginBottom: 10,
  },
  or: {
    color: "#6ABD47",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});

export default InitialAuthDisplay;
