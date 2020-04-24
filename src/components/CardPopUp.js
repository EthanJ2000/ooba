import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./Menu";

const CardPopUp = ({ total, screen, renderScreen, closeMenu }) => {
  switch (screen) {
    case "calculator":
      // const position = new Animated.ValueXY(0, 0);
      // Animated.spring(position, {
      //   toValue: { x: 0, y: -8 },
      // }).start();
      return (
        // <Animated.View style={[styles.container, position.getLayout()]}>
        <View style={styles.container}>
          <Text style={styles.title}>Total monthly repayment amount</Text>
          <Text style={styles.amount}>R {`${total}`}</Text>
        </View>

        // </Animated.View>
      );
    case "more":
      return <Menu renderScreen={renderScreen} closeMenu={closeMenu} />;
  }
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "#08aac6",
    borderRadius: 20,
    marginTop: 10,
    elevation: 1,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 19,
    marginTop: 20,
  },
  amount: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 35,
    marginTop: 10,
  },
});

export default CardPopUp;
