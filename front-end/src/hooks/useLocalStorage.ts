import { useState } from "react";

const useLocalStorage = <T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const getJSONFromLocalStorage = (): T => {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key]);
    } else {
      return defaultValue;
    }
  };

  const [data, setData] = useState<T>(() => getJSONFromLocalStorage());

  const setJSONToLocalStorage: React.Dispatch<React.SetStateAction<T>> = (newData) => {
    setData(newData);
    localStorage[key] = JSON.stringify(newData);
  };

  return [data, setJSONToLocalStorage];
};

export default useLocalStorage;
