import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="neuedonnersbergerbruecke.eu.auth0.com"
    clientId="nIwe6RJGlX6cs4k33LhCHYC0wIPRffGQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://reviews-api.com/",
      scope: "read:review write:review",
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
