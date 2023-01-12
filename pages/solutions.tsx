import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import SolutionComponent from "../components/Solution";
import { SolutionsContextProvider } from "../contexts/solutions";
import { useTranslation } from "../hooks";
import { getSolutionsContent } from "../services/solutions";
import { withGetStaticProps } from "../services/utils";
import { PageProps, SolutionsContent } from "../types";

const Solution: NextPage<PageProps<SolutionsContent>> = (props) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Solution | AIP</title>
        <meta name="description" content={t("meta.description_solutions")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SolutionsContextProvider value={props.data}>
        <SolutionComponent />
      </SolutionsContextProvider>
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return withGetStaticProps(context, getSolutionsContent);
};

export default Solution;
