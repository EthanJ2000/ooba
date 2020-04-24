import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Linking,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HorizontalNewsFeed = () => {
  const [data, setData] = useState(null);

  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b0a8bc3df9264ed48a307aa7b89cb8fc";

  const getArticles = async () => {
    try {
      let articles = await fetch(url);
      let result = await articles.json();
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
    <Animated.View style={[styles.parentContainer, animatedStyle]}>
      <Text
        style={{
          fontSize: 20,
          color: "#516F6F",
          fontWeight: "bold",
          marginLeft: 30,
          textAlign: "left",
        }}
      >
        Trending
      </Text>
      <FlatList
        pagingEnabled
        snapToAlignment={"end"}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        horizontal
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
              <ImageBackground
                imageStyle={{ borderRadius: 20 }}
                style={styles.articleImage}
                source={{ uri: item.urlToImage }}
              >
                <Text style={styles.title}>{item.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </Animated.View>
  );
};

const expandArticle = (url) => {
  Linking.openURL(url);
};

const styles = StyleSheet.create({
  feedContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    width: 320,
    height: 150,
    borderRadius: 25,
    elevation: 3,
    alignSelf: "center",
    paddingBottom: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 10,
    bottom: 0,
    elevation: 2,
    position: "absolute",
  },
  articleImage: {
    flex: 1,
  },
});

export default HorizontalNewsFeed;
