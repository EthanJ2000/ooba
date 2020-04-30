import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const SignUp = ({ onBackPressed }) => {
  const ROOT_URL = "https://us-central1-ooba-78a95.cloudfunctions.net";
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: phoneNumber });

      await axios
        .post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: phoneNumber,
        })
        .then(() => {
          setPhoneNumber("");
          Keyboard.dismiss();
          onBackPressed();
        });
    } catch (err) {
      console.log(err);
      ToastAndroid.showWithGravity(
        "Something went wrong",
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
            onBackPressed();
          }}
        >
          <Ionicons name="ios-arrow-back" style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.title}>Sign Up</Text>
      </View>

      <Text style={styles.heading}>Phone Number:</Text>
      <Text style={{ color: "red", marginHorizontal: 30 }}>
        Do not include country code or the first 0 of your number
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ paddingLeft: 5 }}
          placeholder="e.g 813194863"
          onChangeText={(number) => {
            setPhoneNumber(number);
          }}
          value={phoneNumber}
        />
      </View>
      <TouchableOpacity style={styles.submitContainer} onPress={handleSubmit}>
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
  backIcon: {
    fontSize: 20,
    marginTop: 30,
    paddingRight: 30,
    color: "#6ABD45",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#6ABD45",
    marginTop: 25,
    marginRight: 30,
  },
  heading: {
    marginTop: 20,
    marginLeft: 30,
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
});

export default SignUp;
