import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ApplicationsScreen = () => {
  return (
    <View>
      <Text style={styles.title}>APPLICATIONS</Text>
      <Text style={styles.heading}>Lorem Ipsum</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Text style={styles.heading}>Lorem Ipsum</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: "#516F6F",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  heading: {
    marginTop: 10,
    color: "#516F6F",
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  content: {
    marginTop: 10,
    marginHorizontal: 20,
  },
});

export default ApplicationsScreen;
