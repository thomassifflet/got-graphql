import React from "react";
import { View, StyleSheet } from "react-native-web";
import { Link } from "react-router-dom";

import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { Character } from "../Character";
import Header from "../Header";

const AddCharacter = () => (
  <View style={styles.container}>
    <Header />
    <p>Ajouter un personnage</p>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  }
});

export default AddCharacter;
