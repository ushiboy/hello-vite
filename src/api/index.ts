export const fetchHomeListData = async (): Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["a", "b", "c"]);
    }, 500);
  });
};

export const fetchAboutListData = async (): Promise<number[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 500);
  });
};
