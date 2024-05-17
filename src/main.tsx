import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider
      manifestUrl="https://aarntyon.github.io/tgminiapp/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/fqhappyBot",
      }}
    >
      <App />
    </TonConnectUIProvider>
  </React.StrictMode>
);
