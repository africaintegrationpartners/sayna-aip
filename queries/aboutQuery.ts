import { gql } from "@apollo/client";

const QUERY_ABOUT_CONTENT = gql`
  query getAboutContent {
    data: allAbout {
      _id
      intro: part_1 {
        heading
        content
      }
      ideals: part_3 {
        heading
        content
      }
      services: about_services {
        heading
        content
      }
    }
  }
`;

export { QUERY_ABOUT_CONTENT };
