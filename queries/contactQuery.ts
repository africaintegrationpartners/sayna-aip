import { gql } from "@apollo/client";

const QUERY_CONTACT_CONTENT = gql`
  query getContactContent {
    data: allContact {
      _id
      profile
      topic
      how_did_you_hear_about_us
    }
  }
`;

export { QUERY_CONTACT_CONTENT };
