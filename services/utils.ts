import { HasOptionalId, WithGetStaticProps } from "../types";
import { withLocalTranslation } from "./translation";

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

  return !data.length ? null : content[0];
};

export const withGetStaticProps: WithGetStaticProps = async (context, fn) => {
  const defaultLocale = "en";
  const { locale = defaultLocale } = context;
  const data = await (fn ? fn() : Promise.resolve([]));
  const content = getSingleContentFilterByLocale(data, locale);
  const props = await withLocalTranslation(locale, content);

  console.log({ props });

  return { props };
};
