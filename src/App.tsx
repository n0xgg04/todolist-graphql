import React from "react";
import "@styles/global.scss";
import Router from "@routes/index";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { config } from "./config";

const client = new ApolloClient({
  uri: config.graphQLEndpoint,
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
