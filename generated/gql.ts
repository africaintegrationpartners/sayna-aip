/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query getAboutContent {\n    data: allAbout {\n      _id\n      intro: part_1 {\n        heading\n        content\n      }\n      ideals: part_3 {\n        heading\n        content\n      }\n      services: about_services {\n        heading\n        content\n      }\n    }\n  }\n": types.GetAboutContentDocument,
    "\n  query getContactContent {\n    data: allContact {\n      _id\n      profile\n      topic\n      how_did_you_hear_about_us\n    }\n  }\n": types.GetContactContentDocument,
    "\n  query getSocialLinks {\n    data: allContact {\n      _id\n      socials {\n        facebook\n        linkedin\n        twitter\n        whatsapp\n      }\n    }\n  }\n": types.GetSocialLinksDocument,
    "\n  query getHomeContent {\n    data: allHome {\n      _id\n      home__header {\n        hero\n        hero_questions\n      }\n      part_1 {\n        heading\n        content\n      }\n      part_2 {\n        heading\n        content\n      }\n      part_3 {\n        heading\n        content\n      }\n      part_4 {\n        heading\n        content\n        list\n      }\n    }\n  }\n": types.GetHomeContentDocument,
    "\n  query getProgramsContent {\n    data: allPrograms {\n      _id\n      programs_heading\n      programs {\n        groups {\n          heading\n          content\n        }\n        group_name\n      }\n    }\n  }\n": types.GetProgramsContentDocument,
    "\n  query getSolutionsContent {\n    data: allSolutions {\n      _id\n      solutions_heading {\n        heading\n        content\n      }\n      solutions_services {\n        heading\n        content\n      }\n      solutions_sectors\n    }\n  }\n": types.GetSolutionsContentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAboutContent {\n    data: allAbout {\n      _id\n      intro: part_1 {\n        heading\n        content\n      }\n      ideals: part_3 {\n        heading\n        content\n      }\n      services: about_services {\n        heading\n        content\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAboutContent {\n    data: allAbout {\n      _id\n      intro: part_1 {\n        heading\n        content\n      }\n      ideals: part_3 {\n        heading\n        content\n      }\n      services: about_services {\n        heading\n        content\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getContactContent {\n    data: allContact {\n      _id\n      profile\n      topic\n      how_did_you_hear_about_us\n    }\n  }\n"): (typeof documents)["\n  query getContactContent {\n    data: allContact {\n      _id\n      profile\n      topic\n      how_did_you_hear_about_us\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSocialLinks {\n    data: allContact {\n      _id\n      socials {\n        facebook\n        linkedin\n        twitter\n        whatsapp\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSocialLinks {\n    data: allContact {\n      _id\n      socials {\n        facebook\n        linkedin\n        twitter\n        whatsapp\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getHomeContent {\n    data: allHome {\n      _id\n      home__header {\n        hero\n        hero_questions\n      }\n      part_1 {\n        heading\n        content\n      }\n      part_2 {\n        heading\n        content\n      }\n      part_3 {\n        heading\n        content\n      }\n      part_4 {\n        heading\n        content\n        list\n      }\n    }\n  }\n"): (typeof documents)["\n  query getHomeContent {\n    data: allHome {\n      _id\n      home__header {\n        hero\n        hero_questions\n      }\n      part_1 {\n        heading\n        content\n      }\n      part_2 {\n        heading\n        content\n      }\n      part_3 {\n        heading\n        content\n      }\n      part_4 {\n        heading\n        content\n        list\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProgramsContent {\n    data: allPrograms {\n      _id\n      programs_heading\n      programs {\n        groups {\n          heading\n          content\n        }\n        group_name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProgramsContent {\n    data: allPrograms {\n      _id\n      programs_heading\n      programs {\n        groups {\n          heading\n          content\n        }\n        group_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSolutionsContent {\n    data: allSolutions {\n      _id\n      solutions_heading {\n        heading\n        content\n      }\n      solutions_services {\n        heading\n        content\n      }\n      solutions_sectors\n    }\n  }\n"): (typeof documents)["\n  query getSolutionsContent {\n    data: allSolutions {\n      _id\n      solutions_heading {\n        heading\n        content\n      }\n      solutions_services {\n        heading\n        content\n      }\n      solutions_sectors\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;