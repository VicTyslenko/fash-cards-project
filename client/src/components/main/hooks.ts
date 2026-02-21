import { useEffect } from "react";

import { useSearchParams } from "react-router";

import { ModeParams } from "./models";


export const useDefaultParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode") as ModeParams;

  useEffect(() => {
    setSearchParams((sp) => {
      if (!sp.get("mode")) sp.set("mode", ModeParams.STUDY);
      return sp;
    });
  }, [setSearchParams]);

  return { mode };
};


