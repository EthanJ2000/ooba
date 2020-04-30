import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import firebase from "firebase";

const SignIn = ({ onSignInBackButtonPressed, navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const ROOT_URL = "https://us-central1-ooba-78a95.cloudfunctions.net";

  const handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOTP`, {
        phone: phoneNumber,
        code: code,
      });

      firebase.auth().signInWithCustomToken(data.token);

      if (data.token) {
        ToastAndroid.showWithGravity(
          "Login Successful!",
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        );
        setPhoneNumber("");
        setCode("");
        navigation.navigate("Dashboard");
      }
    } catch (err) {
      console.log(err);
      ToastAndroid.showWithGravity(
        "Invalid Code",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
    }
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            onSignInBackButtonPressed();
          }}
        >
          <Ionicons name="ios-arrow-back" style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>Sign In</Text>
      </View>

      <Text style={{ marginLeft: 30, marginTop: 25 }}>Phone Number:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ paddingLeft: 5 }}
          placeholder="e.g 813194863"
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          value={phoneNumber}
        />
      </View>

      <Text style={{ marginLeft: 30, marginTop: 20 }}>Code:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ paddingLeft: 5 }}
          placeholder="e.g 3232"
          onChangeText={(text) => {
            setCode(text);
          }}
          value={code}
        />
      </View>

      <TouchableOpacity
        style={styles.submitContainer}
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#6ABD45",
    marginTop: 25,
    marginRight: 30,
  },
  inputContainer: {
    alignSelf: "center",
    width: 280,
    marginTop: 10,
    borderWidth: 1,
  },

  submitContainer: {
    backgroundColor: "#6ABD45",
    width: 130,
    height: 25,
    marginTop: 10,
    marginLeft: 30,
  },
  submitText: {
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 2,
    color: "white",
  },
  backIcon: {
    fontSize: 20,
    marginTop: 30,
    paddingRight: 30,
    color: "#6ABD45",
  },
});

export default SignIn;
