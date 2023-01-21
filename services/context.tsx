import { createContext, useContext } from "react";
import { useNonNullContext } from "../hooks/useNonNullContext";
import { ContextProviderProps } from "../types";

function createPageContext<T>() {
  const Context = createContext<T | null>(null);

  const ContextProvider = (props: ContextProviderProps<T>) => {
    return (
      <Context.Provider value={props.value}>{props.children}</Context.Provider>
    );
  };

  const useContext = () => {
    return useNonNullContext(Context);
  };

  return { Context, ContextProvider, useContext };
}

function createNullablePageContext<T>() {
  const Context = createContext<T | null>(null);

  const ContextProvider = (props: ContextProviderProps<T>) => {
    return (
      <Context.Provider value={props.value}>{props.children}</Context.Provider>
    );
  };

  const useCustomContext = () => {
    return useContext(Context);
  };

  return { Context, ContextProvider, useContext: useCustomContext };
}

export { createPageContext, createNullablePageContext };
