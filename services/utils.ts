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

  if (!content.length)
    throw new Error(`Content for locale ${locale} not found.`);

  return content[0];
};

export const withGetStaticProps: WithGetStaticProps = async (context, fn) => {
  const defaultLocale = "en";
  const { locale = defaultLocale } = context;
  const data = await fn();
  const content = getSingleContentFilterByLocale(data, locale);
  const props = await withLocalTranslation(locale, content);

  console.log({ props });

  return { props };
};
