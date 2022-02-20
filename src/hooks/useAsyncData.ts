import { useEffect, useState } from "react";

const useAsyncData = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setData(["a", "b", "c"]);
    }, 500);
  }, []);

  return {
    data,
  };
};

export { useAsyncData };
