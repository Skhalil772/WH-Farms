import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";
import { DataProvider } from "./context/DataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-quxq33tz.us.auth0.com"
      clientId="AwX5rYek4d7ckWZrzqGAuSaasKnT5E4F"
      redirectUri={window.location.origin}
    >
      <DataProvider>
        <App />
      </DataProvider>
    </Auth0Provider>
  </React.StrictMode>
);
