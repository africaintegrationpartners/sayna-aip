import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { createContext } from "react";
import StoriesComponent from "../components/Stories";
import { useTranslation } from "../hooks";
import api from "../services/apiService";

export const ContentContext = createContext({});

// Disabled for now
const Stories: NextPage = (props: any) => {
  const t = useTranslation();

  return (
    <div>
      <Head>
        <title>Stories | AIP</title>
        <meta name="description" content={t("meta.description_stories")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContext.Provider value={props["data"]}>
        {/* <StoriesComponent /> */}
      </ContentContext.Provider>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { locale = "fr" } = context;

//   const localizedData = await serverSideTranslations(locale, ["common"]);

//   const storyContentRes = await api.get<any>(
//     `/story?populate=deep&locale=${locale}`
//   );
//   const storyContent = storyContentRes.data?.data?.attributes;

//   const blogsRes = await api.get<any>(
//     `/articles?populate=deep&locale=${locale}&sort=updatedAt:desc`
//   );
//   const blogs = blogsRes.data?.data?.map((blog: any) => ({
//     createdAt: blog.attributes?.createdAt,
//     id: blog.id,
//     img: blog.attributes?.image?.data?.attributes?.url ?? "",
//     title: blog.attributes?.title ?? "",
//   }));

//   return {
//     props: {
//       ...localizedData,
//       data: { ...storyContent, blogs },
//     },
//   };
// };

export default Stories;
