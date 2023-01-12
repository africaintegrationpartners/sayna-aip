import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getLocalTranslation = async (locale: string) => {
  return await serverSideTranslations(locale, ["common"]);
};

export const withLocalTranslation = async <T>(locale: string, data: T) => {
  const localTranslation = await getLocalTranslation(locale);
  return {
    ...localTranslation,
    data,
  };
};
