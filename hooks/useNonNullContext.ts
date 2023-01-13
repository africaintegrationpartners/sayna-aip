import { Context, useContext } from "react";

export const useNonNullContext = <T>(ctx: Context<T>) => {
  const content = useContext(ctx);
  if (!content) throw new Error("content should be provided");
  return content;
};
