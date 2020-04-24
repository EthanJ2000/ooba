import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Slider } from "react-native-elements";

const SLIDER_COLOR = "#08aac6";

const CalculatorGroup = ({ label, min, max, step, onValChanged }) => {
  const [value, setValue] = useState(min);
  let interest = Math.round(value * 10) / 10;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.numberDisplayContainer}>
        {label === "Interest rate" ? (
          <Text style={styles.numberDisplayTextStyle}>{`${interest}%`}</Text>
        ) : (
          <Text style={styles.numberDisplayTextStyle}>{interest}</Text>
        )}
      </View>

      <Slider
        minimumValue={min}
        maximumValue={max}
        thumbTintColor={SLIDER_COLOR}
        maximumTrackTintColor={SLIDER_COLOR}
        minimumTrackTintColor={SLIDER_COLOR}
        value={value}
        step={step}
        onValueChange={(val) => {
          setValue(val);
          onValChanged(parseInt(val));
        }}
      />

      {/* Min/Max Displays */}
      <View style={styles.MinMaxContainer}>
        <Text style={styles.minTextStyle}>{min}</Text>
        <Text style={styles.maxTextStyle}>{max}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  label: {
    color: "gray",
    alignSelf: "flex-start",
    top: 25,
  },
  numberDisplayContainer: {
    height: 30,
    width: 100,
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignSelf: "flex-end",
  },
  numberDisplayTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#516F6F",
  },
  minTextStyle: {
    fontWeight: "bold",
    color: "#516F6F",
  },
  maxTextStyle: {
    fontWeight: "bold",
    color: "#516F6F",
  },
  MinMaxContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CalculatorGroup;
