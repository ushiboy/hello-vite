import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

import { AppState } from "./AppState";
import { AppStateProvider } from "./AppContext";

import Home from "./pages/Home";
import About from "./pages/About";

type Props = {
  state: AppState;
};

const App: React.FC<Props> = ({ state }) => {
  return (
    <AppStateProvider value={{ state }}>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </ThemeProvider>
      </>
    </AppStateProvider>
  );
};

export default App;
