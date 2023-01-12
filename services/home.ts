import {
  GetHomeContentQuery,
  GetHomeContentQueryVariables,
} from "../generated/graphql";
import { QUERY_HOME_CONTENT } from "../queries/homeQuery";
import gqlClient from "../setup/apollo-client";

export const getHomeContent = async () => {
  const { data } = await gqlClient.query<
    GetHomeContentQuery,
    GetHomeContentQueryVariables
  >({ query: QUERY_HOME_CONTENT });
  return data.data;
};
