import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const SignInWithFacebook = ({ props }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        try {
          props.facebookLogin();
        } catch (err) {
          console.log(err);
        }
      }}
    >
      <View style={styles.textcontainer}>
        <FontAwesome name="facebook-f" style={styles.icon} />
        <Text style={styles.text}>SIGN IN WITH FACEBOOK</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4169A7",
    alignSelf: "center",
    width: 280,
    elevation: 1,
  },
  textcontainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  icon: {
    color: "white",
    fontSize: 20,
    padding: 10,
    marginTop: 3,
    marginLeft: 10,
  },
});

export default SignInWithFacebook;
