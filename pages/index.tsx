import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "../hooks";
import { createContext } from "react";

import gqlClient from "../setup/apollo-client";
import { QUERY_HOME_CONTENT } from "../queries/homeQuery";
import {
  GetHomeContentQuery,
  GetHomeContentQueryVariables,
} from "../generated/graphql";

export const ContentContext = createContext({});

const Home: NextPage = (props: any) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Home | AIP</title>
        <meta name="description" content={t("meta.description_home")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <HomeComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "fr" } = context;
  const localizedData = await serverSideTranslations(locale, ["common"]);
  const { data } = await gqlClient.query<
    GetHomeContentQuery,
    GetHomeContentQueryVariables
  >({ query: QUERY_HOME_CONTENT });
  console.log({ data });

  return {
    props: {
      ...localizedData,
      // data: { ...homeContent, blogs },
      data: {},
    },
  };
};

export default Home;
