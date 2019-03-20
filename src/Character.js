import React from "react";
import { Text, View, Image, StyleSheet } from "react-native-web";

import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

export const Character = ({ name, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={imageUrl} style={styles.image} />
      {name && <Text style={styles.text}>{name}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 5
  },
  text: {
    fontSize: 20,
    fontFamily: "Luckiest Guy",
    color: "red",
    margin: 10,
    letterSpacing: 1
  }
});
