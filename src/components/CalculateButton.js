import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CalculateButton = ({ calculate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={calculate}>
      <Text style={styles.textStyle}>CALCULATE</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#516F6F",
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
});

export default CalculateButton;
