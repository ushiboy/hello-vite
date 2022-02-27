import { useEffect, useState, useContext } from "react";
import { fetchAboutListData } from "../../../api";
import { context as AboutContext } from "../context";

const useAsyncData = () => {
  const { pageProps } = useContext(AboutContext);
  const [data, setData] = useState<number[]>(pageProps.data);

  useEffect(() => {
    (async () => {
      const r = await fetchAboutListData();
      setData(r);
    })();
  }, []);

  return {
    data,
  };
};

export { useAsyncData };
