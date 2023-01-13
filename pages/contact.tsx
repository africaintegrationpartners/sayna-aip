import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { createContext } from "react";
import ContactComponent from "../components/Contact";
import { useTranslation } from "../hooks";
import { withGetStaticProps } from "../services/utils";

export const ContentContext = createContext({});

const Contact: NextPage = (props: any) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Contact | AIP</title>
        <meta name="description" content={t("meta.description_contact")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        <ContactComponent />
      </ContentContext.Provider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context);
};

export default Contact;
