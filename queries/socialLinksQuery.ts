import { gql } from "@apollo/client";

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

export { QUERY_SOCIAL_LINKS };
