import { gql } from "@apollo/client";

const QUERY_HOME_CONTENT = gql`
  query getHomeContent {
    allHome {
      _id
      home__header {
        hero
      }
    }
  }
`;

export { QUERY_HOME_CONTENT };
