import {
  GetProgramsContentQuery,
  GetProgramsContentQueryVariables,
} from "../generated/graphql";
import { QUERY_PROGRAMS_CONTENT } from "../queries/programsQuery";
import gqlClient from "../setup/apollo-client";

export const getProgramsContent = async () => {
  const { data } = await gqlClient.query<
    GetProgramsContentQuery,
    GetProgramsContentQueryVariables
  >({ query: QUERY_PROGRAMS_CONTENT });
  return data.data;
};
