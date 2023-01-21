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

const QUERY_SOCIAL_LINKS = gql`
  query getSocialLinks {
    data: allContact {
      _id
      socials {
        facebook
        linkedin
        twitter
        whatsapp
      }
    }
  }
`;

export { QUERY_CONTACT_CONTENT, QUERY_SOCIAL_LINKS };
