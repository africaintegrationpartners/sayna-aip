import { createPageContext } from "../services/context";
import { SocialLinks } from "../types";

export const {
  Context: SocialLinksContext,
  ContextProvider: SocialLinksContextProvider,
  useContext: useSocialLinksContext,
} = createPageContext<SocialLinks>();
