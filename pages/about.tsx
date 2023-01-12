import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AboutComponent from "../components/About";
import { AboutContextProvider } from "../contexts/about";
import { useTranslation } from "../hooks";
import { getAboutContent } from "../services/about";
import { withGetStaticProps } from "../services/utils";
import { AboutContent, PageProps } from "../types";

const About: NextPage<PageProps<AboutContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>A Propos | AIP</title>
        <meta name="description" content={t("meta.description_about")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutContextProvider value={props.data}>
        <AboutComponent />
      </AboutContextProvider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context, getAboutContent);
};

export default About;
