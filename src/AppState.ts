import { HomePageProps, AboutPageProps } from "./pages";

export type PageProps = HomePageProps | AboutPageProps;

export type AppState = {
  pageProps?: PageProps;
  page: string;
};
