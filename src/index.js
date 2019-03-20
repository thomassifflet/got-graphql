import React from "react";
import { AppRegistry, View } from "react-native-web";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Feed from "./views/Feed";
import Detail from "./views/Detail";
import AddCharacter from "./views/AddCharacter";
import { defaults, resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const client = new ApolloClient({
  uri: "https://z2zxy9pw3l.sse.codesandbox.io/graphql",
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

const App = () => (
  <ApolloProvider client={client}>
    {
      <Router>
        <View>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/addcharacter" exact component={AddCharacter} />
            <Route path="/:character/:key" component={Detail} />
          </Switch>
        </View>
      </Router>
    }
  </ApolloProvider>
);

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
