import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Menu = ({ renderScreen, closeMenu }) => {
  const options = ["Faqs", "Advice", "Contact", "My Profile", "Log Out"];
  return (
    <View style={styles.more}>
      <View style={styles.moreHeader}>
        <Text style={styles.moreText}>More</Text>
        <TouchableOpacity
          onPress={() => {
            closeMenu();
          }}
        >
          <AntDesign name="closecircleo" style={styles.close} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={options}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                renderScreen(item);
              }}
            >
              <View>
                <Text style={styles.menuItems}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  more: {
    height: 300,
    marginTop: 10,
    width: "100%",
    backgroundColor: "#3B5D5D",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 1,
    position: "absolute",
    bottom: 0,
  },
  moreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
    marginHorizontal: 40,
  },
  close: {
    fontSize: 28,
    color: "white",
    marginTop: 12,
    marginRight: 10,
    alignSelf: "flex-end",
  },
  menuItems: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 40,
    marginVertical: 15,
  },
});

export default Menu;
