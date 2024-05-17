import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";

function App() {
  useTonConnectUI();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>以下操作只在tg环境下有效</p>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => WebApp.showAlert(`你打开了弹窗`)}
      >
        打开弹窗
      </button>
      <TonConnectButton />
    </>
  );
}

export default App;
