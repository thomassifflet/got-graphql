import React from "react";
import { View, StyleSheet } from "react-native-web";
import { Link } from "react-router-dom";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Character } from "../Character";
import { GET_CHARACTERS } from "./Detail";
import CharacterList from "../CharacterList";
import Header from "../Header";
import { Fetching, Error } from "../Fetching";

const GET_CHARACTER = gql`
  {
    characters {
      key
      name
      imageUrl
    }
  }
`;

const Feed = () => (
  <View style={styles.container}>
    <Header />
    <Query query={GET_CHARACTER}>
      {({ loading, error, data, client }) => {
        if (loading) return <Fetching />;
        if (error) return <Error />;

        return (
          <CharacterList
            data={data.characters}
            renderRow={(type, data) => (
              <Link
                to={{
                  pathname: `/${data.name}/${data.key}`,
                  state: { id: data.key }
                }}
                style={{ textDecoration: "none" }}
              >
                <Character {...data} url={data.imageUrl} />
              </Link>
            )}
          />
        );
      }}
    </Query>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  }
});

export default Feed;
