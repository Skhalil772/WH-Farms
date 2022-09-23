import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./App";
import { DataProvider } from "./context/DataContext";
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const id = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-quxq33tz.us.auth0.com"
      clientId="odTUDD3orPjSvG9mQhh5wLAOxXnVLsNj"
      redirectUri={window.location.origin}
    >
      <DataProvider>
        <App />
      </DataProvider>
    </Auth0Provider>
  </React.StrictMode>
);
