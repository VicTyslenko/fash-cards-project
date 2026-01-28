import { useEffect } from "react";
import { ModeParams } from "./models";
import { filterDataByCategories } from "../../shared/utils";
import { useSearchParams } from "react-router";
import { useStoreSelector } from "../../hooks";
import { useGetAllCardsQuery } from "../../api/apiSlice";

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


