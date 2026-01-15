import { useEffect } from "react";
import { ModeParams } from "./models";
import { useSearchParams } from "react-router";

export const useDefaultParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") as ModeParams;

  useEffect(() => {
    setSearchParams((sp) => {
      if (!sp.get("mode")) sp.set("mode", ModeParams.Study);
      return sp;
    });
  }, [setSearchParams]);

  return { mode };
};
