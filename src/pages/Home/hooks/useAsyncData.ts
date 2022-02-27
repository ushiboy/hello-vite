import { useEffect, useState, useContext } from "react";
import { fetchHomeListData } from "../../../api";
import { context as HomeContext } from "../context";

const useAsyncData = () => {
  const { pageProps } = useContext(HomeContext);
  const [data, setData] = useState<string[]>(pageProps.data);

  useEffect(() => {
    (async () => {
      const r = await fetchHomeListData();
      setData(r);
    })();
  }, []);

  return {
    data,
  };
};

export { useAsyncData };
