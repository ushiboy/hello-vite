export * from "./type";
import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./style";
import { HomeProvider } from "./context";

import { useAsyncData } from "./hooks/useAsyncData";

const HomeContainer: React.FC = () => {
  const { data } = useAsyncData();
  const { t } = useTranslation("common");
  return (
    <S.Root>
      <S.Title>Home</S.Title>
      <S.WelcomeMessage>{t("Welcome to React")}</S.WelcomeMessage>
      <S.Items>
        {data.map((d, i) => (
          <S.Item key={i}>{d}</S.Item>
        ))}
      </S.Items>
    </S.Root>
  );
};

export default function Home() {
  return (
    <HomeProvider>
      <HomeContainer />
    </HomeProvider>
  );
}
