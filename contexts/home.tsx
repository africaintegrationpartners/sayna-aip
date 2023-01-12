import { createPageContext } from "../services/context";
import { HomeContent } from "../types";

export const {
  Context: HomeContext,
  ContextProvider: HomeContextProvider,
  useContext: useHomeContext,
} = createPageContext<HomeContent>();
