import { createPageContext } from "../services/context";
import { AboutContent } from "../types";

export const {
  Context: AboutContext,
  ContextProvider: AboutContextProvider,
  useContext: useAboutContext,
} = createPageContext<AboutContent>();
