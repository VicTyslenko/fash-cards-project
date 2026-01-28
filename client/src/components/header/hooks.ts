import { useSearchParams } from "react-router";
import { ModeParams } from "../main/models";

export const useHeader = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleChangeMode = (newValue: ModeParams.STUDY | ModeParams.All) => {
    setSearchParams((sp) => {
      sp.set("mode", newValue);
      return sp;
    });
  };

  return { handleChangeMode };
};
