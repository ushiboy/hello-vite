import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { ServerStyleSheet } from "styled-components";

import "./i18n";
import { AppState } from "./AppState";
import App from "./App";

import { fetchHomeListData, fetchAboutListData } from "./api";

export async function initializeState(url: string): Promise<AppState> {
  let initState: AppState = {
    page: "not found"
  };
  if (url === "/") {
    initState = {
      pageProps: {
        data: await fetchHomeListData(),
      },
      page: "/"
    };
  }
  else if (url === "/about") {
    initState = {
      pageProps: {
        data: await fetchAboutListData(),
      },
      page: "/about"
    };
  }
  return initState;
}

export function render(url: string, state: AppState) {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App state={state} />
        </StaticRouter>
      )
    );
    return [html, sheet.getStyleTags()];
  } catch (error) {
    throw error as Error;
  } finally {
    sheet.seal();
  }
}
