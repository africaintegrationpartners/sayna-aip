import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import ProgramsComponent from "../components/Programs";
import { ProgramsContextProvider } from "../contexts/programs";
import { useTranslation } from "../hooks";
import { getProgramsContent } from "../services/programs";
import { withGetStaticProps } from "../services/utils";
import { PageProps, ProgramsContent } from "../types";

const Programs: NextPage<PageProps<ProgramsContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Programs | AIP</title>
        <meta name="description" content={t("meta.description_programs")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgramsContextProvider value={props.data}>
        <ProgramsComponent />
      </ProgramsContextProvider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context, getProgramsContent);
};

export default Programs;
