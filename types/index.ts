import { GetStaticProps } from "next";
import { SSRConfig } from "next-i18next";
import { ReactElement } from "react";
import {
  GetAboutContentQuery,
  GetContactContentQuery,
  GetHomeContentQuery,
  GetProgramsContentQuery,
  GetSocialLinksQuery,
  GetSolutionsContentQuery,
} from "../generated/graphql";

export type PageProps<T> = SSRConfig & { data: T };

export type Unpacked<T> = T extends (infer U)[] ? U : T;

// Page content from CMS
export type HomeContent = Unpacked<GetHomeContentQuery["data"]>;
export type AboutContent = Unpacked<GetAboutContentQuery["data"]>;
export type SolutionsContent = Unpacked<GetSolutionsContentQuery["data"]>;
export type ProgramsContent = Unpacked<GetProgramsContentQuery["data"]>;
export type ContactContent = Unpacked<GetContactContentQuery["data"]>;
export type SocialLinks = Unpacked<GetSocialLinksQuery["data"]>;

export type Maybe<T> = T | null | undefined;

export type HasOptionalId = { _id?: Maybe<String> };

// HOC for GestStaticProps
export type WithGetStaticProps = (
  arg: Parameters<GetStaticProps>["0"],
  fn?: () => Promise<HasOptionalId[]>
) => ReturnType<GetStaticProps>;

export type ContextProviderProps<T> = {
  children: ReactElement;
  value: T;
};
