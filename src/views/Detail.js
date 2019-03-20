import React from "react";
import { View, StyleSheet } from "react-native-web";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import CharacterList from "../CharacterList";
import Header from "../Header";
import { Fetching, Error } from "../Fetching";

export const GET_CHARACTERS = gql`
  query getCharacter {
    characters {
      key
      name
      imageUrl
      house {
        key
        name
        imageUrl
      }
    }
  }
`;

const Detail = ({
  match: {
    params: { name, id }
  }
}) => (
  <View style={styles.container}>
    <Header text={name} />
    <Query query={GET_CHARACTERS}>
      {({ loading, error, data }) => {
        if (loading) return <Fetching />;
        if (error) return <Error />;

        return <CharacterList data={data.imageUrl} />;
      }}
    </Query>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  fetching: {
    fontSize: 30,
    fontFamily: "Luckiest Guy",
    color: "#23a599",
    margin: 10,
    letterSpacing: 1
  }
});

export default Detail;
