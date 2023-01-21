import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FormSuccess from "../components/Contact/FormSuccess";
import { useTranslation } from "../hooks";
import { withGetStaticProps } from "../services/utils";
import { AboutContent, PageProps } from "../types";

const About: NextPage<PageProps<AboutContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Confirmation | AIP</title>
        <meta name="description" content={t("meta.description_about")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormSuccess />
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context);
};

export default About;
