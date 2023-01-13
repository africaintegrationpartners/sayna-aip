import { createPageContext } from "../services/context";
import { ProgramsContent } from "../types";

export const {
  Context: ProgramsContext,
  ContextProvider: ProgramsContextProvider,
  useContext: useProgramsContext,
} = createPageContext<ProgramsContent>();
