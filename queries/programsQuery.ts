import { gql } from "@apollo/client";

const QUERY_PROGRAMS_CONTENT = gql`
  query getProgramsContent {
    data: allPrograms {
      _id
      programs_heading
      programs {
        groups {
          heading
          content
        }
        group_name
      }
    }
  }
`;

export { QUERY_PROGRAMS_CONTENT };
