import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store.ts";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
