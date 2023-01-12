import { createContext, ReactElement, useContext } from "react";
import { useNonNullContext } from "../hooks/useNonNullContext";
import { HomeContent, Unpacked } from "../types";

export const HomeContext = createContext<HomeContent | null>(null);

type Props = {
  children: ReactElement;
  value: HomeContent;
};

export const HomeContextProvider = (props: Props) => {
  return (
    <HomeContext.Provider value={props.value}>
      {props.children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useNonNullContext(HomeContext);
};
