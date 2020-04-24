import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CardPopUp from "../components/CardPopUp";

// Screens
import Faqs from "../components/more-components/Faqs";
import Advice from "../components/more-components/Advice";
import Contact from "../components/more-components/Contact";
import MyProfile from "../components/more-components/MyProfile";

const MoreScreen = ({ navigation }) => {
  const [screen, setScreen] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  navigation.addListener("didFocus", (payload) => {
    setIsVisible(true);
  });

  const renderScreen = (item) => {
    setScreen(item);
  };

  const closeMenu = () => {
    setIsVisible(!isVisible);
  };

  const renderSwitch = (screen) => {
    switch (screen) {
      case "Faqs":
        return <Faqs style={styles.text} />;
      case "Advice":
        return <Advice />;
      case "Contact":
        return <Contact />;
      case "My Profile":
        return <MyProfile />;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {screen ? renderSwitch(screen) : null}
      {isVisible ? (
        <CardPopUp
          screen="more"
          renderScreen={renderScreen}
          closeMenu={() => {
            closeMenu();
          }}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
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
