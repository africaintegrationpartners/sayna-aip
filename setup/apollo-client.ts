import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://oic93m8n.api.sanity.io/v1/graphql/production/default",
  cache: new InMemoryCache(),
});

export default client;
