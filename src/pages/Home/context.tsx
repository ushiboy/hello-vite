import React, { useContext } from "react";
import { HomePageProps } from "./type";
import { context as AppContext } from "../../AppContext";

export type HomeContext = {
  pageProps: HomePageProps;
};

const context = React.createContext(Object.create(null) as HomeContext);

const HomeProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const { state } = useContext(AppContext);
  let value: HomeContext = {
    pageProps: {
      data: [],
    },
  };
  if (state.pageProps && state.page === "/") {
    value = { pageProps: (state.pageProps as HomePageProps) };
  }
  return <context.Provider value={value}>{children}</context.Provider>;
};

export { HomeProvider, context };
