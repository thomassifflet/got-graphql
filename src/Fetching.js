import React from "react";
import { View, Text, StyleSheet, Image } from "react-native-web";

const Fetching = () => (
  <View>
    <Text style={styles.fetching}>⚔️ Fetching...</Text>
  </View>
);

const Error = () => (
  <View style={styles.container}>
    <Text style={styles.fetching}>Oh no! Something went wrong.</Text>
    <Image
      source="https://www.journaldugeek.com/content/uploads/2018/05/game-of-thrones-saison-7-theorie.jpg"
      style={styles.image}
    />
    <Text style={styles.fetching}>Please refresh and try again.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  fetching: {
    fontSize: 30,
    fontFamily: "Luckiest Guy",
    color: "grey",
    margin: 10,
    letterSpacing: 1
  },
  image: {
    height: 170,
    width: 170
  }
});

export { Fetching, Error };
