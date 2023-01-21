import { createPageContext } from "../services/context";
import { ContactContent } from "../types";

export const {
  Context: ContactContext,
  ContextProvider: ContactContextProvider,
  useContext: useContactContext,
} = createPageContext<ContactContent>();
