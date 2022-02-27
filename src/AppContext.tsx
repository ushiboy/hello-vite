import React from "react";
import { AppState } from "./AppState";

export type AppContext = {
  state: AppState;
};

export const context = React.createContext(Object.create(null) as AppContext);

export const AppStateProvider: React.FC<{
  value: AppContext;
  children: JSX.Element;
}> = ({ value, children }) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};
