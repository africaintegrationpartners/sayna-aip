import {
  GetContactContentQuery,
  GetContactContentQueryVariables,
} from "../generated/graphql";
import { QUERY_CONTACT_CONTENT } from "../queries/contactQuery";
import gqlClient from "../setup/apollo-client";

export const getContactContent = async () => {
  const { data } = await gqlClient.query<
    GetContactContentQuery,
    GetContactContentQueryVariables
  >({ query: QUERY_CONTACT_CONTENT });
  return data.data;
};
