import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { createContext } from "react";
import ContactComponent from "../components/Contact";
import { ContactContextProvider } from "../contexts/contact";
import { useTranslation } from "../hooks";
import { getContactContent } from "../services/contact";
import { withGetStaticProps } from "../services/utils";
import { ContactContent, PageProps } from "../types";

const Contact: NextPage<PageProps<ContactContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Contact | AIP</title>
        <meta name="description" content={t("meta.description_contact")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactContextProvider value={props.data}>
        <ContactComponent />
      </ContactContextProvider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context, getContactContent);
};

export default Contact;
