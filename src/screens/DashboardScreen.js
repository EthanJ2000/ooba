import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import HorizontalNewsFeed from "../components/news-feed/HorizontalNewsFeed";
import VerticalNewsFeed from "../components/news-feed/VerticalNewsFeed";

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>DASHBOARD</Text>
      <HorizontalNewsFeed navigation={navigation} />
      <VerticalNewsFeed navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    color: "#516F6F",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
});

export default DashboardScreen;
