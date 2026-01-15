import { useSearchParams } from "react-router";

export const useHeader = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleChangeMode = (newValue: "study" | "all-cards") => {
    setSearchParams((sp) => {
      sp.set("mode", newValue);
      return sp;
    });
  };

  return { handleChangeMode };
};
