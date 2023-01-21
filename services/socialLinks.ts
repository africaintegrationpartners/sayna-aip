import {
  GetSocialLinksQuery,
  GetSocialLinksQueryVariables,
} from "../generated/graphql";
import { QUERY_SOCIAL_LINKS } from "../queries/socialLinksQuery";
import gqlClient from "../setup/apollo-client";

export const getSocialLinks = async () => {
  const { data } = await gqlClient.query<
    GetSocialLinksQuery,
    GetSocialLinksQueryVariables
  >({ query: QUERY_SOCIAL_LINKS });
  return data.data;
};
