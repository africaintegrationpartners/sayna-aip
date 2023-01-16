import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FormSuccess from "../components/Contact/FormSuccess";
import { useTranslation } from "../hooks";
import { withLocalTranslation } from "../services/translation";
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

export const getStaticProps: GetStaticProps = async (context) => {
  const defaultLocale = "en";
  const { locale = defaultLocale } = context;
  const props = await withLocalTranslation(locale, null);
  return { props };
};

export default About;
