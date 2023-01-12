import { GetStaticProps } from "next";
import { SSRConfig } from "next-i18next";
import { GetHomeContentQuery } from "../generated/graphql";

export type PageProps<T> = SSRConfig & { data: T };

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type HomeContent = Unpacked<GetHomeContentQuery["data"]>;

export type Maybe<T> = T | null | undefined;

export type HasOptionalId = { _id?: Maybe<String> };

// HOC for GestStaticProps
export type WithGetStaticProps = (
  arg: Parameters<GetStaticProps>["0"],
  fn: () => Promise<HasOptionalId[]>
) => ReturnType<GetStaticProps>;
