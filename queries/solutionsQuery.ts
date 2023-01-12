import { gql } from "@apollo/client";

const QUERY_SOLUTIONS_CONTENT = gql`
  query getSolutionsContent {
    data: allSolutions {
      _id
      solutions_heading {
        heading
        content
      }
      solutions_services {
        heading
        content
      }
      solutions_sectors
    }
  }
`;

export { QUERY_SOLUTIONS_CONTENT };
