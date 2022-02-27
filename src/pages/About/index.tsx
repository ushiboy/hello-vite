export * from "./type"
import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./style";
import { AboutProvider } from "./context";

import { useAsyncData } from "./hooks/useAsyncData";

const AboutContainer: React.FC = () => {
  const { data } = useAsyncData();
  const { t } = useTranslation("common");
  return (
    <S.Root>
      <S.Title>About</S.Title>
      <S.Message>{t("NG")}</S.Message>
      <S.Items>
        {data.map((d, i) => (
          <S.Item key={i}>{d}</S.Item>
        ))}
      </S.Items>
    </S.Root>
  );
};

export default function About() {
  return (
    <AboutProvider>
      <AboutContainer />
    </AboutProvider>
  );
}
