import React from "react";
import { View, Text, StyleSheet, Image } from "react-native-web";
import { Link } from "react-router-dom";

const Header = ({ text }) => (
  <View style={styles.container}>
    <Link to="/">
      <Image
        source="https://avatars0.githubusercontent.com/u/17189275?s=400&v=4"
        style={styles.apollo}
      />
    </Link>
    <Link to="/addcharacter">Ajouter</Link>
    <Text style={styles.text}>{text || "Game of Thrones"}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    width: "100%",
    backgroundColor: "grey",
    marginBottom: 40
  },
  text: {
    fontSize: 40,
    fontFamily: "Luckiest Guy",
    color: "white",
    letterSpacing: 2,
    textAlignVertical: "bottom",
    marginTop: 12
  },
  apollo: {
    height: 50,
    width: 50
  },
  heart: {
    height: 60,
    width: 60
  }
});

export default Header;
