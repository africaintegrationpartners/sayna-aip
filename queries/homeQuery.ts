import { gql } from "@apollo/client";

const QUERY_HOME_CONTENT = gql`
  query getHomeContent {
    data: allHome {
      _id
      home__header {
        hero
        hero_questions
      }
      part_1 {
        heading
        content
      }
      part_2 {
        heading
        content
      }
      part_3 {
        heading
        content
      }
      part_4 {
        heading
        content
        list
      }
    }
  }
`;

export { QUERY_HOME_CONTENT };
