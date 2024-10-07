import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./scss/index.scss";
import "./css/index.css"

import global_en from "./translation/en/global.json";
import global_ger from "./translation/ger/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') || "en",  
  resources: {
    en: {
      global: global_en,
    },
    ger: {
      global: global_ger,
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
