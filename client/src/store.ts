import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "./api/apiSlice";
import cardsReducer from "./slices/cards/cardsSlice";
import modalReducer from "./slices/modals/modalSlice";
import popupReducer from "./slices/popup/popupSlice";

const cardsPersistConfig = {
  key: "cards",
  storage,
  blacklist: ["cardsLimit"],
};

const rootReducer = combineReducers({
  cards: persistReducer(cardsPersistConfig, cardsReducer),
  modals: modalReducer,
  popup: popupReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
