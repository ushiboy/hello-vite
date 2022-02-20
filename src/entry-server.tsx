import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import "./i18n";
import App from "./App";

export function render(url: string) {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      )
    );
    return [html, sheet.getStyleTags()];
  } catch (error) {
    console.log(error);
  } finally {
    sheet.seal();
  }
}
