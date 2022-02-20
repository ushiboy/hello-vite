import React from "react";
import { useTranslation } from "react-i18next";

import * as S from "./style";

import { useAsyncData } from "../../hooks/useAsyncData";

export default function Home() {
  const { data } = useAsyncData();
  const { t } = useTranslation();
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
}
