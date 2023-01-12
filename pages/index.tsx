import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../components/Home";

import { useTranslation } from "../hooks";
import { HomeContent, PageProps } from "../types";
import { HomeContextProvider } from "../contexts/home";
import { getHomeContent } from "../services/home";
import { withGetStaticProps } from "../services/utils";

const Home: NextPage<PageProps<HomeContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Home | AIP</title>
        <meta name="description" content={t("meta.description_home")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContextProvider value={props.data}>
        <HomeComponent />
      </HomeContextProvider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context, getHomeContent);
};

export default Home;
