import { HasOptionalId, WithGetStaticProps } from "../types";
import { getLocalTranslation } from "./translation";

export const getSingleContentFilterByLocale = <T extends HasOptionalId>(
  data: T[],
  locale: string,
  defaultLocale = "en"
) => {
  const pattern = "__i18n_.{2,4}$";
  const content = data.filter((value) => {
    const hasMatch = value._id?.match(pattern);
    return locale !== defaultLocale ? hasMatch : !hasMatch;
  });

  // check if we previously had data but the ones for the local is not present
  if (data.length && !content.length)
    throw new Error(`Content for locale ${locale} not found.`);

  return !data.length ? {} : content[0];
};

const getRevalidateInterval = () => {
  const interval = parseInt(process.env.REVALIDATE_INTERVAL_IN_SEC + "");
  return isNaN(interval) || interval < 60 ? 60 : interval;
};

/**
 * used to fetch common data for all pages, giving the posibility to page specific data
 * @param context
 * @param fn
 * @returns
 */
export const withGetStaticProps: WithGetStaticProps = async (context, fn) => {
  const defaultLocale = "en";
  const { locale = defaultLocale } = context;
  const rawData = await (fn ? fn() : Promise.resolve([]));
  const content = getSingleContentFilterByLocale(rawData, locale);
  const localTranslation = await getLocalTranslation(locale);

  return {
    props: {
      ...localTranslation,
      data: content,
    },
    revalidate: getRevalidateInterval(),
  };
};
