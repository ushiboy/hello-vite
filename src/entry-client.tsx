import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";

const s = document.getElementById("app-init-state");
const initState = s && s.textContent ? JSON.parse(s.textContent) : {};

ReactDOM.hydrate(
  <BrowserRouter>
    <App state={initState} />
  </BrowserRouter>,
  document.getElementById("app")
);
