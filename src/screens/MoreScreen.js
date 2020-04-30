import React, { useState } from "react";
import {
  StyleSheet,
  View,
  AsyncStorage,
  Animated,
  PanResponder,
} from "react-native";
import CardPopUp from "../components/CardPopUp";
import MoreComponent from "../components/MoreComponent";

const MoreScreen = ({ navigation }) => {
  //Animation Stuff
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (event, gesture) => {
      const { dx, dy } = gesture;
      return dx > 2 || dx < -2 || dy > 2 || dy < -2;
    },
    onPanResponderMove: (event, gesture) => {
      if (gesture.moveY > 430 && gesture.moveY < 685) {
        position.setValue({ x: 0, y: gesture.moveY });
      }

      console.log(gesture);
    },
    onPanResponderRelease: () => {},
  });

  //Animation Stuff

  const [screen, setScreen] = useState(null);

  const renderScreen = (item) => {
    setScreen(item);
  };

  const renderSwitch = (screen) => {
    switch (screen) {
      case "Faqs":
        return <MoreComponent title="FAQs" />;
      case "Advice":
        return <MoreComponent title="Advice" />;
      case "Contact":
        return <MoreComponent title="Contact" />;
      case "My Profile":
        return <MoreComponent title="My Profile" />;
      case "Log Out": {
        AsyncStorage.removeItem("fb_token");
        navigation.navigate("AuthScreen");
        break;
      }

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {screen ? renderSwitch(screen) : <View />}
      <Animated.View
        style={[styles.animatedView, position.getLayout()]}
        {...panResponder.panHandlers}
      >
        <CardPopUp screen="more" renderScreen={renderScreen} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    bottom: 0,
    minHeight: 300,
    minWidth: "100%",
  },
  container: {
    height: "100%",
    width: "100%",
  },
  text: {
    marginTop: 30,
    textAlign: "center",
  },
});

export default MoreScreen;
