import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch,RootState } from "./store";

export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
export const useStoreSelector = useSelector.withTypes<RootState>();
