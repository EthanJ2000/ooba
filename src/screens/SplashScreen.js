import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const SplashScreen = ({ navigation }) => {
  return (
    <AppIntroSlider
      showSkipButton={true}
      data={slides}
      onDone={() => {
        navigation.navigate("AuthScreen");
      }}
      onSkip={() => {
        navigation.navigate("AuthScreen");
      }}
      renderItem={renderItem}
    />
  );
};

const renderItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: item.backgroundColor,
      }}
    >
      <Image source={item.logo} style={styles.logo} />
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const slides = [
  {
    key: "1",
    title: "Welcome!",
    text: "We've created an improved experience with new and updated features.",
    image: require("../../assets/carousel_1.png"),
    logo: require("../../assets/ooba_logo_1.png"),
    backgroundColor: "#6ABD45",
  },
  {
    key: "2",
    title: "Notifications",
    text:
      "We've included in-app notifications to keep you updated on everything.",
    image: require("../../assets/carousel_2.png"),
    logo: require("../../assets/ooba_logo_2.png"),
    backgroundColor: "#F48473",
  },
  {
    key: "3",
    title: "Prequalify",
    text:
      "Before you start house hunting, you can get prequalified right here in the app",
    image: require("../../assets/carousel_3.png"),
    logo: require("../../assets/ooba_logo_3.png"),
    backgroundColor: "#00A66C",
  },
];

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  image: {
    marginTop: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
    fontSize: 17,
    marginHorizontal: 26,
    marginBottom: 50,
  },
});

export default SplashScreen;
