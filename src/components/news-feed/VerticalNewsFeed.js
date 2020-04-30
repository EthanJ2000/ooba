import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  Linking,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const VerticalNewsFeed = () => {
  const [searchQuery, setQuery] = useState("mortgage");
  const [data, setData] = useState(null);

  const url = `http://newsapi.org/v2/everything?q=${searchQuery}&from=2020-04-16&sortBy=popularity&apiKey=b0a8bc3df9264ed48a307aa7b89cb8fc`;

  const getArticles = async () => {
    try {
      let articles = await fetch(url).catch((err) => {
        console.log(err);
      });
      let result = await articles.json();
      console.log(result);
      return result.articles;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticles().then((news_data) => {
      setData(news_data);
      runAnimation();
    });
  }, []);

  //Animation Stuff
  const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0));

  const runAnimation = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  const animatedStyle = {
    opacity: fadeAnimation,
  };
  // //Animation Stuff

  return (
    // <View style={styles.container}>
    <Animated.View style={[styles.container, animatedStyle]}>
      <Text
        style={{
          fontSize: 20,
          color: "#516F6F",
          fontWeight: "bold",
          marginTop: 15,
          marginLeft: 10,
          textAlign: "left",
        }}
      >
        Recent News
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title.toString()}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.feedContainer}
              onPress={() => {
                expandArticle(item.url);
              }}
            >
              <Image
                style={styles.articleImage}
                source={{ uri: item.urlToImage }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.content}>{item.content}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Animated.View>
    // </View>
  );
};

const expandArticle = (url) => {
  Linking.openURL(url);
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  feedContainer: {
    elevation: 1,
    marginTop: 10,
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    borderColor: "#D7D7D7",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  content: { padding: 10 },
  articleImage: {
    width: "100%",
    height: 200,
    alignSelf: "flex-start",
  },
});

export default VerticalNewsFeed;
