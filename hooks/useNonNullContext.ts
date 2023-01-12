import { Context, useContext } from "react";

export const useNonNullContext = <T>(ctx: Context<T>) => {
  const context = useContext(ctx);
  if (!context) throw new Error("Context should be provided");
  return context;
};
