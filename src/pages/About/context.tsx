import React, { useContext } from "react";
import { AboutPageProps } from "./type";
import { context as AppContext } from "../../AppContext";

export type AboutContext = {
  pageProps: AboutPageProps;
};

const context = React.createContext(Object.create(null) as AboutContext);

const AboutProvider: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const { state } = useContext(AppContext);
  let value: AboutContext = {
    pageProps: {
      data: [],
    },
  };
  if (state.pageProps && state.page === "/about") {
    value = { pageProps: (state.pageProps as AboutPageProps) };
  }
  return <context.Provider value={value}>{children}</context.Provider>;
};

export { AboutProvider, context };
