import {
  GetSolutionsContentQuery,
  GetSolutionsContentQueryVariables,
} from "../generated/graphql";
import { QUERY_SOLUTIONS_CONTENT } from "../queries/solutionsQuery";
import gqlClient from "../setup/apollo-client";

export const getSolutionsContent = async () => {
  const { data } = await gqlClient.query<
    GetSolutionsContentQuery,
    GetSolutionsContentQueryVariables
  >({ query: QUERY_SOLUTIONS_CONTENT });
  return data.data;
};
