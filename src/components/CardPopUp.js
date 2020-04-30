import React, { useState } from "react";
import { Text, StyleSheet, Animated } from "react-native";
import Menu from "./Menu";

const CardPopUp = ({ total, screen, renderScreen }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const position = new Animated.ValueXY(0, 0);

  switch (screen) {
    case "calculator":
      if (!isAnimated) {
        Animated.spring(position, {
          toValue: { x: 0, y: -130 },
        }).start(() => {
          setIsAnimated(true);
        });
      }

      return (
        <Animated.View style={[styles.container, position.getLayout()]}>
          <Text style={styles.title}>Total monthly repayment amount</Text>
          <Text style={styles.amount}>R {`${total}`}</Text>
        </Animated.View>
      );
    case "more":
      return <Menu renderScreen={renderScreen} />;
  }
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: "#08aac6",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: 140,
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
