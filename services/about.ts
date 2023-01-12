import {
  GetAboutContentQuery,
  GetAboutContentQueryVariables,
} from "../generated/graphql";
import { QUERY_ABOUT_CONTENT } from "../queries/aboutQuery";
import gqlClient from "../setup/apollo-client";

export const getAboutContent = async () => {
  const { data } = await gqlClient.query<
    GetAboutContentQuery,
    GetAboutContentQueryVariables
  >({ query: QUERY_ABOUT_CONTENT });
  return data.data;
};
