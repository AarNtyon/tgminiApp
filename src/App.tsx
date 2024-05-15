import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WebApp from "@twa-dev/sdk";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
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
      <button onClick={() => WebApp.showAlert(`你打开了弹窗`)}>显示警告</button>
      {/* <button onClick={() => WebApp.showAlert(`你打开了弹窗`)}>连接钱包</button> */}
      <TonConnectButton />
    </>
  );
}

export default App;
