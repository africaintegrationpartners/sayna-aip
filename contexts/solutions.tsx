import { createPageContext } from "../services/context";
import { SolutionsContent } from "../types";

export const {
  Context: SolutionsContext,
  ContextProvider: SolutionsContextProvider,
  useContext: useSolutionsContext,
} = createPageContext<SolutionsContent>();
