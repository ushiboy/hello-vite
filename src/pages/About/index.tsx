import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./style";

export default function About() {
  const { t } = useTranslation("error");
  return (
    <S.Root>
      <S.Title>About</S.Title>
      <S.Message>{t("NG")}</S.Message>
    </S.Root>
  );
}
