import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import popupReducer from "./slices/popup/popupSlice";
import storage from "redux-persist/lib/storage";
import cardsReducer from "./slices/cards/cardsSlice";
import modalReducer from "./slices/modals/modalSlice";

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
